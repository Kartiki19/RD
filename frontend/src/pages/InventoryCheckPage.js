import React, { useState } from 'react';
import axios from 'axios';

const InventoryCheckPage = () => {
  const [barcode, setBarcode] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
  };

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`/inventory/${barcode}`);
      setProductDetails(response.data);
    } catch (error) {
      console.error('Error fetching product details', error);
    }
  };

  const handleVerifyProduct = async () => {
    try {
      await axios.post('/inventory/verify', { barcode });
      alert('Product verified successfully');
      setBarcode('');
      setProductDetails(null);
    } catch (error) {
      console.error('Error verifying product', error);
    }
  };

  return (
    <div>
      <h1>Inventory Check Page</h1>
      <div>
        <input
          type="text"
          placeholder="Barcode"
          value={barcode}
          onChange={handleBarcodeChange}
        />
        <button onClick={fetchProductDetails}>Fetch Product</button>
        {productDetails && (
          <div>
            <p>Item: {productDetails.O_Name}</p>
            <p>Weight: {productDetails.Weight}</p>
            <p>Location: {productDetails.Location}</p>
            <button onClick={handleVerifyProduct}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryCheckPage;

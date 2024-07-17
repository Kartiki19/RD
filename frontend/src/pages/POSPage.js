import { useState, useEffect } from 'react';
import axios from 'axios';

const POSPage = () => {
  const [barcode, setBarcode] = useState('');
  const [productDetails, setProductDetails] = useState([]);
  const [goldPrice, setGoldPrice] = useState(0);
  const [silverPrice, setSilverPrice] = useState(0);

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
  };

  const fetchProductDetails = async () => {
    try {
      const response = await axios.post('/pos/calculate', { barcode });
      setProductDetails([...productDetails, response.data]);
      setBarcode('');
    } catch (error) {
      console.error('Error fetching product details', error);
    }
  };

  const fetchGoldSilverPrices = async () => {
    try {
      const response = await axios.get('/pos/prices');
      setGoldPrice(response.data.goldPrice);
      setSilverPrice(response.data.silverPrice);
    } catch (error) {
      console.error('Error fetching prices', error);
    }
  };

  useEffect(() => {
    fetchGoldSilverPrices();
  }, []);

  return (
    <div>
      <h1>POS Page</h1>
      <div>
        <h2>Gold Price: ${goldPrice}/g</h2>
        <h2>Silver Price: ${silverPrice}/g</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Barcode"
          value={barcode}
          onChange={handleBarcodeChange}
        />
        <button onClick={fetchProductDetails}>Fetch Product</button>
      </div>
      <div>
        <h2>Product Details</h2>
        <ul>
          {productDetails.map((item, index) => (
            <li key={index}>{item.O_Name} - {item.Weight}g - ${item.Price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default POSPage;

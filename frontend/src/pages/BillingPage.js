import React, { useState } from 'react';
import './BillingPage.css'; // Make sure to create and import this CSS file for styling

const BillingPage = () => {
  const [rows, setRows] = useState([]);
  const [huidCharges, setHuidCharges] = useState(51);
  const [deleteMode, setDeleteMode] = useState(false);

  const handleAddRow = () => {
    if (rows.length >= 10) {
      alert('Max only 10 items can be added.');
      return;
    }
    const newRow = { id: rows.length + 1, barcodeId: '', itemName: '', qty: '', hsn: '', purity: '', grossWt: '', netWt: '', ratePerGram: '', fixed: '', amount: '' };
    setRows([...rows, newRow]);
  };

  const handleDeleteRows = () => {
    if (rows.length === 0) {
      alert('No rows to delete.');
      return;
    }
    setDeleteMode(true);
  };

  const handleRowDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map(row => row.id === id ? { ...row, [field]: value } : row);
    setRows(updatedRows);
  };

  const handleNew = () => {
    setRows([]);
    // Clear other input fields as needed
  };

  const handlePrint = () => {
    // Implement print functionality
  };

  return (
    <div className="billing-page">
      <div className="header">
        <div className="logo">
          <img src="./logo.png" alt="Shop Logo" /> {/* Update the path to your logo */}
        </div>
      </div>

      <div className="customer-info">
        <div className="info-row">
          <label>Name:</label>
          <input type="text" />
          <label>Invoice No.:</label>
          <input type="text" />
        </div>
        <div className="info-row">
          <label>Address:</label>
          <input type="text" />
          <label>Date:</label>
          <input type="date" />
        </div>
        <div className="info-row">
          <label>Contact No.:</label>
          <input type="text" />
          <label>Gstin:</label>
          <input type="text" />
        </div>
      </div>

      <div className="tax-invoice">
        <h2>Tax Invoice</h2>
        <table>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'lightpurple' }}>Barcode ID <span className="optional">(Optional)</span></th>
              <th style={{ backgroundColor: 'lightpurple' }}>Item Name</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Qty</th>
              <th style={{ backgroundColor: 'lightpurple' }}>HSN</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Purity</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Gross wt</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Net wt</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Rate per gram</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Fixed</th>
              <th style={{ backgroundColor: 'lightpurple' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td><input type="text" maxLength="10" value={row.barcodeId} onChange={(e) => handleInputChange(row.id, 'barcodeId', e.target.value)} /></td>
                <td><input type="text" value={row.itemName} onChange={(e) => handleInputChange(row.id, 'itemName', e.target.value)} /></td>
                <td><input type="text" value={row.qty} onChange={(e) => handleInputChange(row.id, 'qty', e.target.value)} /></td>
                <td><input type="text" value={row.hsn} onChange={(e) => handleInputChange(row.id, 'hsn', e.target.value)} /></td>
                <td><input type="text" value={row.purity} onChange={(e) => handleInputChange(row.id, 'purity', e.target.value)} /></td>
                <td><input type="text" value={row.grossWt} onChange={(e) => handleInputChange(row.id, 'grossWt', e.target.value)} /></td>
                <td><input type="text" value={row.netWt} onChange={(e) => handleInputChange(row.id, 'netWt', e.target.value)} /></td>
                <td><input type="text" value={row.ratePerGram} onChange={(e) => handleInputChange(row.id, 'ratePerGram', e.target.value)} /></td>
                <td><input type="text" value={row.fixed} onChange={(e) => handleInputChange(row.id, 'fixed', e.target.value)} /></td>
                <td><input type="text" value={row.amount} onChange={(e) => handleInputChange(row.id, 'amount', e.target.value)} /></td>
                {deleteMode && <td><button onClick={() => handleRowDelete(row.id)}>Delete</button></td>}
              </tr>
            ))}
            <tr>
              <td></td>
              <td>HUID charges</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><input type="text" readOnly value={huidCharges} /></td>
              <td><input type="text" readOnly value={huidCharges} /></td>
            </tr>
          </tbody>
        </table>
        <button className="black-button" onClick={handleAddRow}>Add</button>
        <button className="black-button" onClick={handleDeleteRows}>Delete</button>
        {deleteMode && <button className="black-button" onClick={() => setDeleteMode(false)}>Cancel</button>}
      </div>

      <div className="controls">
        <button className="black-button" onClick={handleNew}>New</button>
        <button className="black-button" onClick={handlePrint}>Print</button>
      </div>

      <div className="totals">
        <div className="totals-row">
          <label>Total amount:</label>
          <input type="text" readOnly />
        </div>
        <div className="totals-row">
          <label>CGST 1.5%:</label>
          <input type="text" readOnly />
        </div>
        <div className="totals-row">
          <label>SGST 1.5%:</label>
          <input type="text" readOnly />
        </div>
        <div className="totals-row">
          <label>Total Amount:</label>
          <input type="text" readOnly />
        </div>
      </div>
    </div>
  );
};

export default BillingPage;

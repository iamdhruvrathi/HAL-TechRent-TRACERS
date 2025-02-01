import React, { useState, useEffect } from 'react';

interface RentalCalculatorProps {
  dailyRate: number;
}

const RentalCalculator: React.FC<RentalCalculatorProps> = ({ dailyRate }) => {
  const [days, setDays] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatePrices = () => {
      const basePrice = dailyRate * days;
      const fee = basePrice * 0.02; // 2% convenience fee
      setSubtotal(basePrice);
      setConvenienceFee(fee);
      setTotal(basePrice + fee);
    };

    calculatePrices();
  }, [days, dailyRate]);

  return (
    <div className="rental-calculator p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Rental Calculator</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Number of Days</label>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="price-breakdown space-y-2">
        <div className="flex justify-between">
          <span>Daily Rate:</span>
          <span>${dailyRate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal ({days} days):</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Convenience Fee (2%):</span>
          <span>${convenienceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default RentalCalculator; 
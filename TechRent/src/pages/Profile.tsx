// src/pages/Profile.tsx
import React from 'react';
import { userOrders, rentedProducts, addOrder, addProduct } from '../data'; // Adjust the path based on your file structure

const Profile = () => {
  const orders = userOrders;
  const products = rentedProducts;

  const handleNewOrder = () => {
    const newOrder = {
      id: 3,
      product: "New Product",
      startDate: "2024-03-10",
      endDate: "2024-03-20",
      status: "Active",
      price: "₹2,500"
    };
    addOrder(newOrder);
  };

  const handleNewProduct = () => {
    const newProduct = {
      id: 3,
      name: "Smartphone",
      price: "₹200/day",
      status: "Available",
      rentedTimes: 0
    };
    addProduct(newProduct);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Rental History */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Rental History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.startDate} to {order.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Products */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">My Products for Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className={`px-2 py-1 text-xs rounded-full ${product.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {product.status}
                </span>
                <span className="text-sm text-gray-500">
                  Rented {product.rentedTimes} times
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons to Add New Order or Product */}
      <div className="flex space-x-4">
        <button onClick={handleNewOrder} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add New Order</button>
        <button onClick={handleNewProduct} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add New Product</button>
      </div>
    </div>
  );
};

export default Profile;

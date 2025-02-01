import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: 1,
    name: "MacBook Pro M1",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: "₹499/day",
    category: "Laptops",
    description: "Latest MacBook Pro with M1 chip, 16GB RAM, 512GB SSD. Perfect for professionals and content creators.",
    condition: "Excellent",
    location: "Mumbai, Maharashtra",
    owner: {
      name: "Rahul Sharma",
      rating: 4.8,
      responseTime: "Usually responds within 1 hour"
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement message sending functionality
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-indigo-600 font-bold mb-4">{product.price}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Category</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Condition</h3>
                  <p className="text-gray-600">{product.condition}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-600">{product.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Details & Chat */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Owner</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.owner.name}</p>
                  <p className="text-sm text-gray-500">⭐ {product.owner.rating}</p>
                </div>
                <p className="text-sm text-gray-500">{product.owner.responseTime}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-4">Chat with Owner</h3>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
  condition: string;
  location: string;
  owner: {
    name: string;
    rating: number;
    responseTime: string;
  };
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/messages", {
        productId: id,
        message,
      });
      setMessage("");
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded-lg" />
        </div>

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
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
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

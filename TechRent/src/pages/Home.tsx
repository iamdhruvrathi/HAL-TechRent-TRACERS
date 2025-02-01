import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro M1",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      price: "₹499/day",
      category: "Laptops"
    },
    {
      id: 2,
      name: "Sony A7 III",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      price: "₹799/day",
      category: "Cameras"
    },
    {
      id: 3,
      name: "PlayStation 5",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      price: "₹399/day",
      category: "Gaming Consoles"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Tech Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Rent Premium Tech Products
            </h1>
            <p className="text-xl mb-8">
              Try before you buy. Rent the latest technology at affordable prices.
            </p>
            <Link
              to="/rent"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700"
            >
              Start Renting
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4">About TechRent</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          TechRent is India's leading technology rental platform, making the latest gadgets accessible to everyone. 
          We believe in providing high-quality tech products on rent, allowing you to experience premium devices 
          without the commitment of purchasing. Our service is available across major cities in India, offering 
          a seamless rental experience with verified products and reliable customer support.
        </p>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-indigo-600 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold mt-1">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
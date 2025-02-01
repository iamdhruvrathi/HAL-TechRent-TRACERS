import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Laptops", "Smartphones", "Gaming Consoles", "Cameras", "Audio Devices", "Monitors"
  ];

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">TechRent</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <Link to="/rent" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Rent Your Tech
              </Link>
              
              <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>

              <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-16 inset-x-0 z-30 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/rent" className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
              Rent Your Tech
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Login
            </Link>
            <Link to="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Profile
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

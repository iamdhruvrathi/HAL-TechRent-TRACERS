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
    },
    // Additional laptops
    {
      id: 4,
      name: "Dell XPS 13",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsbCUyMHhwcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      price: "₹499/day",
      category: "Laptops"
    },
    {
      id: 5,
      name: "HP Spectre x360",
      image: "https://media.istockphoto.com/id/92502312/photo/aluminum-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=bmtuhxYHVqbX-mWVa3WNT6KVJy3Baakr_sAlodU_1ZA=",
      price: "₹450/day",
      category: "Laptops"
    },
    {
      id: 6,
      name: "Asus ROG Zephyrus G14",
      image: "https://images.unsplash.com/photo-1582203422342-1541a90a0103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      price: "₹700/day",
      category: "Laptops"
    },
    {
      id: 7,
      name: "Lenovo ThinkPad X1 Carbon",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExlbm92byUyMFRoaW5rUGFkJTIwWDElMjBDYXJib24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      price: "₹550/day",
      category: "Laptops"
    },
    {
      id: 8,
      name: "Microsoft Surface Laptop 4",
      image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F673apvnyrn7xiolkzc7o.jpg",
      price: "₹500/day",
      category: "Laptops"
    },
    {
      id: 9,
      name: "Acer Predator Helios 300",
      image: "https://media.istockphoto.com/id/178109012/photo/laptops.webp?a=1&b=1&s=612x612&w=0&k=20&c=FBEUcOUHjfxCg77yYFXZLxRotGxnomk7e5G7myEMmhA=",
      price: "₹650/day",
      category: "Laptops"
    },
    {
      id: 10,
      name: "Razer Blade 15",
      image:"https://media.istockphoto.com/id/184095569/photo/opened-notebook.webp?a=1&b=1&s=612x612&w=0&k=20&c=YQbHXWVtn-s8Ev0ijdaFb20MIsCKGAh6msEHsAPP-xg=",
      price: "₹750/day",
      category: "Laptops"
    },
    {
      id: 11,
      name: "Apple MacBook Air M2",
      image: "https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBNYWNCb29rJTIwQWlyJTIwTTIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      price: "₹550/day",
      category: "Laptops"
    },
    {
      id: 12,
      name: "Gigabyte AORUS 15G",
      image: "https://images.unsplash.com/photo-1452457750107-cd084dce177d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2lnYWJ5dGUlMjBBT1JVUyUyMDE1RyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      price: "₹680/day",
      category: "Laptops"
    },
    {
      id: 13,
      name: "MSI GE76 Raider",
      image: "https://images.unsplash.com/photo-1520375300877-3500f50d069e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNhbXN1bmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      price: "₹700/day",
      category: "Laptops"
    },
    {
      id: 14,
      name: "Samsung Galaxy Book Pro 360",
      image: "https://plus.unsplash.com/premium_photo-1733317312273-a37561012283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TVNJJTIwR0U3NiUyMFJhaWRlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      price: "₹650/day",
      category: "Laptops"
    },
    { id: 15, name: "Sony A7 III", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", price: "₹799/day", category: "Cameras" },
    { id: 16, name: "Canon EOS R5", image: "https://images.unsplash.com/photo-1648781329670-5f00c1b37404?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fub24lMjBFT1MlMjBSNSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D", price: "₹899/day", category: "Cameras" },
    { id: 17, name: "Nikon Z6 II", image: "https://images.unsplash.com/photo-1460134846237-51c777df6111?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Tmlrb24lMjBaNiUyMElJJTIwY2FtZXJhfGVufDB8fDB8fHww", price: "₹850/day", category: "Cameras" },
    { id: 18, name: "Fujifilm X-T4", image: "https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVqaWZpbG0lMjBYJTIwVDQlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D", price: "₹750/day", category: "Cameras" },
    { id: 19, name: "Panasonic Lumix S5", image: "https://images.unsplash.com/photo-1590292339438-5fc3be7fca9d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuYXNvbmljJTIwTHVtaXglMjBTNWNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D", price: "₹700/day", category: "Cameras" },

    { id: 20, name: "iPhone 13 Pro", image: "https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aVBob25lJTIwMTMlMjBQcm8lMjBzbWFydHBob25lfGVufDB8fDB8fHww", price: "₹499/day", category: "Smartphones" },
    { id: 21, name: "Samsung Galaxy S21", image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹479/day", category: "Smartphones" },
    { id: 22, name: "Google Pixel 6", image: "https://images.unsplash.com/photo-1613836255019-a7b845804788?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29vZ2xlJTIwUGl4ZWwlMjA2fGVufDB8fDB8fHww", price: "₹459/day", category: "Smartphones" },
    { id: 23, name: "OnePlus 9 Pro", image: "https://images.unsplash.com/photo-1658321466969-1c45400bb947?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹469/day", category: "Smartphones" },
    { id: 24, name: "Sony Xperia 5", image: "https://images.unsplash.com/photo-1513599898445-1c34777500ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29ueSUyMFhwZXJpYSUyMDV8ZW58MHx8MHx8fDA%3D", price: "₹499/day", category: "Smartphones" },

    // Gaming Consoles
    { id: 25, name: "PlayStation 5", image: "https://images.unsplash.com/photo-1678761442615-5af77170f925?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGxheVN0YXRpb24lMjA1JTIwZ2FtaW5nfGVufDB8fDB8fHww", price: "₹599/day", category: "Gaming Consoles" },
    { id: 26, name: "Xbox Series X", image: "https://media.istockphoto.com/id/1476305675/photo/game-pad-video-game-controller.webp?a=1&b=1&s=612x612&w=0&k=20&c=l40ShFgYP0IYqCYdE8aryD4dq18d-7F8pKSxEpWlZCM=", price: "₹579/day", category: "Gaming Consoles" },
    { id: 27, name: "Nintendo Switch", image: "https://images.unsplash.com/photo-1661347334036-d484f970b1a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmludGVuZG8lMjBTd2l0Y2glMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D", price: "₹399/day", category: "Gaming Consoles" },
    { id: 28, name: "Oculus Quest 2", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2N1bHVzJTIwUXVlc3QlMjAyJTIwZ2FtaW5nfGVufDB8fDB8fHww", price: "₹349/day", category: "Gaming Consoles" },
    { id: 29, name: "PS4 Pro", image: "https://plus.unsplash.com/premium_photo-1723802528730-072330eea1b9?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹299/day", category: "Gaming Consoles" },

    // Audio Devices
    { id: 30, name: "Bose QC 35 II", image: "https://media.istockphoto.com/id/1133008111/photo/audio-speakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=SH77ajAELQQOOs7vnaeWk123EUCJuSLB5GreoiJfexs=", price: "₹199/day", category: "Audio Devices" },
    { id: 31, name: "Sony WH-1000XM4", image: "https://images.unsplash.com/photo-1489797715492-dbd3bd61c6b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29ueSUyMFdIJTIwMTAwMFhNNCUyMGF1ZGlvJTIwZGV2aWNlfGVufDB8fDB8fHww", price: "₹209/day", category: "Audio Devices" },
    { id: 32, name: "JBL Flip 5", image: "https://plus.unsplash.com/premium_photo-1683288537184-7ef228ca6820?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", price: "₹159/day", category: "Audio Devices" },
    { id: 33, name: "Apple AirPods Pro", image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBBaXJQb2RzJTIwUHJvfGVufDB8fDB8fHww", price: "₹249/day", category: "Audio Devices" },
    { id: 34, name: "Marshall Emberton", image: "https://media.istockphoto.com/id/1347497149/photo/stereo-headphones-and-audio-player-with-equalizer-on-a-gray-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=nsBYjOcm4bV2JddZGLKY8Yr7qYqw2Zjqv8fppYCqKEU=", price: "₹179/day", category: "Audio Devices" },

    // Monitors
    { id: 35, name: "LG UltraFine 4K", image: "https://images.unsplash.com/photo-1548524238-a971a4a3b523?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹399/day", category: "Monitors" },
    { id: 36, name: "Dell UltraSharp", image: "https://images.unsplash.com/photo-1510548470459-83d740bff5de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVsbCUyMFVsdHJhU2hhcnAlMjBtb25pdGVyfGVufDB8fDB8fHww", price: "₹429/day", category: "Monitors" },
    { id: 37, name: "Samsung Odyssey G7", image: "https://images.unsplash.com/photo-1675681783937-dc54d7914b02?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uaXRlcnN8ZW58MHx8MHx8fDA%3D", price: "₹459/day", category: "Monitors" },
    { id: 38, name: "Acer Predator X27", image: "https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWNlciUyMFByZWRhdG9yJTIwWDI3JTIwZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D", price: "₹479/day", category: "Monitors" },
    { id: 39, name: "BenQ PD3200U", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVuUSUyMFBEMzIwMFUlMjBkZXNrdG9wfGVufDB8fDB8fHww", price: "₹439/day", category: "Monitors" }
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

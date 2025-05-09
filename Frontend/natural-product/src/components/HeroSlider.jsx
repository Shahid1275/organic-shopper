import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
// Product data with local image paths

const products = [

  {
    id: 1,
    name: 'Lunar Glow Face Elixir',
    image: '/oils.png',
    description: 'Infused with moonstone essence, this elixir rejuvenates skin with cosmic radiance.',
  },
  {
    id: 2,
    name: 'Evergreen Aloe Shampoo',
    image: '/shampoo.png',
    description: 'Crafted from eternal forest aloe, it cleanses hair with nature’s infinite vitality.',
  },
  {
    id: 3,
    name: 'Stardust Organic Soap',
    image: '/soaps.png',
    description: 'A celestial soap that purifies with interstellar minerals and a dreamy lather.',
  },
  {
    id: 4,
    name: 'Aurora Hydrating Cream',
    image: '/creams.png',
    description: 'Inspired by polar lights, this cream locks in moisture with ethereal glow.',
  },
  {
    id: 5,
    name: 'Volcanic Ash Detox Mask',
    image: '/facewash.png',
    description: 'Harnessing primal volcanic energy, this mask detoxifies for unparalleled clarity.',
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: true,
    accessibility: true,
    fade: true, // Use fade transition for a smoother 3D effect
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-green-100 to-blue-100 overflow-hidden">
      <Slider {...settings} className="h-full">
        {products.map((product) => (
          <div key={product.id} className="h-[600px] outline-none">
            <div className="flex flex-col md:flex-row items-center justify-center h-full px-4">
              {/* Product Card with Enhanced 3D Effect */}
              <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center perspective-1000">
                <div
                  className="relative max-w-[350px] w-full h-[350px] bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:rotate-y-10 hover:scale-105"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => console.error(`Failed to load image: ${product.image}`)}
                  />
                  {/* Overlay for 3D depth */}
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.3), rgba(0,0,0,0.2))',
                      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
                    }}
                  ></div>
                </div>
              </div>
              {/* Product Info */}
              <div className="w-full md:w-1/2 text-center md:text-left p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <button onClick={()=>navigate('/collection')} className=" cursor-pointer px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
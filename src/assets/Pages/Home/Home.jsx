import React, { useState, useEffect } from 'react';

export default function HomeSection() {
  const images = [
    { src: '../src/assets/home-images/01.jpg', text: '20% OFF!' },
    { src: '../src/assets/home-images/02.webp', text: 'Free Shipping!' },
    { src: '../src/assets/home-images/03.webp', text: 'Organic Product!' },
    { src: '../src/assets/home-images/04.webp', text: 'Fresh Product!' },
    { src: '../src/assets/home-images/05.webp', text: 'Buy and get Gift!' },
    { src: '../src/assets/home-images/06.jpg', text: '10% OFF!' },
    { src: '../src/assets/home-images/07.webp', text: 'Replace Waranty!' },
    { src: '../src/assets/home-images/08.webp', text: 'Refund in 7 Days!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section className="relative w-full h-[200px] sm:h-[500px] md:h-[800px] bg-gray-800">
      {/* Image Slider */}
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 group relative">
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-105"
                style={{ objectFit: 'cover' }} // Ensure images fill the container and crop if needed
              />
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Text Overlay on Image (Middle Right) with Flashing Effect */}
              <div className="absolute top-1/2 left-1/2 right-1/8 transform -translate-y-1/2 text-center text-fuchsia-600 text-4xl font-bold flashing-text">
                {image.text}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 md:left-6 lg:left-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 md:right-6 lg:right-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          &#10095;
        </button>
      </div>

      {/* Button Below the Slider with Vibrate Effect */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="/store" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 vibrate-on-hover">
          Shop Now
        </a>
      </div>
      

      {/* Flashing Text Effect CSS */}
      <style jsx>{`
        @keyframes flash {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        .flashing-text {
          animation: flash 1s infinite;
        }

        @keyframes vibrate {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(3px); }
        }

        .vibrate-on-hover:hover {
          animation: vibrate 0.3s ease-in-out infinite;
        }
      `}</style>
    </section>

    
  );
}

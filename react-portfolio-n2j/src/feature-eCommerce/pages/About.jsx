import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="bg-[#FF7E1B] h-screen flex flex-col items-center justify-center text-white md:mt-[-25%] sm:mt-[-40%] mt-[-40%]">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-[#FF7E1B] mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our world of footwear fashion! We are passionate about
          shoes and dedicated to helping you find the perfect pair for every
          occasion.
        </p>
        <p className="text-lg text-gray-700">
          Our extensive collection features everything from trendy sneakers to
          elegant boots. Explore our selection and step into style and comfort.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg text-gray-200">
          At ShoeHub, we strive to provide high-quality footwear that reflects
          your individuality and suits your lifestyle. Our mission is to keep
          your feet fashionable and comfortable, one step at a time.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg text-gray-200">
          Have questions or need assistance? Feel free to reach out to our
          friendly customer support team at{' '}
          <a href="mailto:info@shoehub.com">info@shoehub.com</a>.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Visit Our Stores</h2>
        <p className="text-lg text-gray-200">
          We have stores located in major cities across the country. Come visit
          us and explore our latest collections. Find a store near you:{' '}
          <a href="/stores" className="text-[#FF7E1B hover:underline">
            Store Locations
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;

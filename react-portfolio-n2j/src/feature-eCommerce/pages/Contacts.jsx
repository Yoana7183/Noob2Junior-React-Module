import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="sm:bg-gray-100 py-12 md:mt-[-25%] sm:mt-[-40%] mt-[-50%]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Visit Our Stores</h2>
            <p className="text-gray-700 mb-4">
              You can find our stores at the following locations:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <strong>New York Store:</strong>
                <br />
                123 Main Street
                <br />
                New York, NY 10001
              </li>
              <li className="mb-2">
                <strong>Los Angeles Store:</strong>
                <br />
                456 Elm Street
                <br />
                Los Angeles, CA 90001
              </li>
              <li className="mb-2">
                <strong>Miami Store:</strong>
                <br />
                789 Palm Avenue
                <br />
                Miami, FL 33101
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              You can also reach out to us through the following contact
              methods:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@shoestore.com"
                  className="text-orange-500 hover:underline"
                >
                  info@shoestore.com
                </a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong>
                <br />
                <a
                  href="tel:+11234567890"
                  className="text-orange-500 hover:underline"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="mb-2">
                <strong>Social Media:</strong>
                <br />
                Follow us on{' '}
                <a
                  href="https://www.facebook.com/shoestore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Facebook
                </a>{' '}
                and{' '}
                <a
                  href="https://www.instagram.com/shoestore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

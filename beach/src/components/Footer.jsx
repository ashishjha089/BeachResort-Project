import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer className="bg-gray-900 text-white p-5">
      <div className="container mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
        <div className="flex  justify-between mt-5 ">
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Talk with Us</h2>
              <ul>
                <li className="flex items-center mb-2">
                  <FaPhone className="mr-2" />
                  Phone: +1234567890
                </li>
                <li className="flex items-center mb-2">
                  <FaEnvelope className="mr-2" />
                  Email: example@example.com
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Location: XYZ Address
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className=" w-full">
              <h2 className="text-lg font-semibold mb-2 ">Say Hello</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 mb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 mb-2"
                  required
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Your Telephone"
                  className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 mb-2"
                />
                <textarea
                  name="comment"
                  placeholder="Your Comment"
                  rows="4"
                  className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 mb-2"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

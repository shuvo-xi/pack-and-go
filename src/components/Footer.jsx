import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>
              We provide reliable and efficient home and office shifting services to make your moving experience stress-free. Our team of experts is here to help you every step of the way.
            </p>
          </div>
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Our Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">House Shifting</a></li>
              <li><a href="#" className="hover:underline">Office Shifting</a></li>
              <li><a href="#" className="hover:underline">Packing & Unpacking</a></li>
              <li><a href="#" className="hover:underline">Furniture Disassembly</a></li>
              <li><a href="#" className="hover:underline">Storage Solutions</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: <a href="mailto:info@yourservice.com" className="hover:underline">info@yourservice.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></p>
            <p>Location: Barisal,Sadar,Bangladesh</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">© 2024 Pack & Go. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
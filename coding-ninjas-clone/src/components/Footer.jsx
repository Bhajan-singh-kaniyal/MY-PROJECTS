import React from 'react';

const Footer = () => (
  <footer className="bg-indigo-800 text-white py-10 px-6 mt-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 className="font-semibold mb-2">Contact Us</h5>
        <p>1800‑123‑3598</p>
        <p>contact@codingninjas.com</p>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Quick Links</h5>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Pricing & Refund</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Pages</h5>
        <ul>
          <li>Job Bootcamp</li>
          <li>Certifications</li>
          <li>Community</li>
        </ul>
      </div>
    </div>
    <p className="text-center mt-8 text-sm">© Sunrise Mentors Pvt. Ltd.</p>
  </footer>
);

export default Footer;

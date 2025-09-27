import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-white font-bold">IELTS Pro Institute</h3>
          <p className="mt-2 text-sm">Helping students achieve their dream scores.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="mt-2 text-sm">Email: hello@ieltspro.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">© 2025 IELTS Pro Institute</p>
    </footer>
  );
}
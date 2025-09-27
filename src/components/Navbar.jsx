import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-blue-600">IELTS Pro Institutes</h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Courses</a>
          <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-50 px-4 py-2 space-y-2">
          <a href="#home" className="block">Home</a>
          <a href="#features" className="block">Courses</a>
          <a href="#testimonials" className="block">Reviews</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
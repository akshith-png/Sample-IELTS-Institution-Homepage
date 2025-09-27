import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Master IELTS with Confidence</h2>
          <p className="mt-4 text-gray-600">
            Join thousands of students who improved their band scores with our expert coaching and AI tools.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="IELTS study"
          className="rounded-lg shadow"
        />
      </div>
    </section>
  );
}
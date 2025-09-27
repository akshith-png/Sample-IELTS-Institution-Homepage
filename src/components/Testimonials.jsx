import React from "react";

const reviews = [
  { name: "Aisha K.", text: "Scored 7.5 in 6 weeks! Speaking drills were amazing." },
  { name: "Rahul S.", text: "Mock tests felt like the real exam. Very helpful." },
  { name: "Meera V.", text: "AI score predictor guided me to band 8." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Student Testimonials</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 bg-white border rounded-lg shadow">
              <p className="text-gray-700">“{r.text}”</p>
              <p className="mt-4 font-semibold text-gray-900">- {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
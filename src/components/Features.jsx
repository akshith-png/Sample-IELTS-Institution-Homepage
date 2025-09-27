import React from "react";

const features = [
  { title: "Speaking Practice", desc: "Live sessions to boost fluency.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Exam-style practice with feedback.", icon: "📝" },
  { title: "AI Band Score", desc: "Instant predictions & tips.", icon: "🤖" },
  { title: "Personal Coaching", desc: "Tailored guidance to hit your target.", icon: "🎯" },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Features</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg shadow hover:shadow-md text-center">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
        <p className="text-gray-600">Custom-built websites using MERN and MEAN stacks – responsive, fast, and scalable.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
        <p className="text-gray-600">Pixel-perfect interfaces, prototypes, and user flows tailored for engagement and usability.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">AI/ML Integration</h3>
        <p className="text-gray-600">From recommendation engines to automation — intelligent systems built for real results.</p>
      </div>
    </div>
  </section>
);

export default Services;

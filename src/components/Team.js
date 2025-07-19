import React from 'react';

const Team = () => (
  <section id="team" className="py-20 bg-gray-50 px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg">
        <h4 className="font-semibold">UI/UX Designer</h4>
        <p className="text-sm text-gray-600">Crafts stunning designs and seamless experiences.</p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg">
        <h4 className="font-semibold">Backend/API Developer</h4>
        <p className="text-sm text-gray-600">Builds scalable backend systems and integrations.</p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg">
        <h4 className="font-semibold">Frontend Developer</h4>
        <p className="text-sm text-gray-600">Brings designs to life with precision and performance.</p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg">
        <h4 className="font-semibold">AI / ML Engineer</h4>
        <p className="text-sm text-gray-600">Specializes in building intelligent systems, machine learning models, and AI-driven solutions.</p>
      </div>
    </div>
  </section>
);

export default Team;

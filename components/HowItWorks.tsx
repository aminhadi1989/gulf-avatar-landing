import React from 'react';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-gulf-light">
    <div className="container mx-auto px-4 text-center mb-16">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        A brief step-by-step explanation of how to use our platform.
      </p>
    </div>
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-bold mb-2">Step 1</h3>
        <p>Enter your text and select a dialect.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-bold mb-2">Step 2</h3>
        <p>Choose your avatar and styling options.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-bold mb-2">Step 3</h3>
        <p>Generate video and download instantly.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;

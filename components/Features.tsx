import React from 'react';

const features = [
  {
    icon: "✅",
    title: "Native Gulf Arabic Dialects",
    description: "Authentic Saudi, Emirati, Omani and other Gulf dialects for natural, locally relevant communication."
  },
  {
    icon: "✅",
    title: "Culturally Appropriate Avatars",
    description: "Traditional attire, respectful gestures, and professional presence aligned with Gulf cultural values."
  },
  {
    icon: "✅",
    title: "Regional Data Sovereignty",
    description: "Planned hosting in UAE and Saudi Arabia (AWS Bahrain/UAE regions) for full data compliance."
  },
  {
    icon: "✅",
    title: "Fast Video Production",
    description: "Create professional videos in minutes without cameras, studios, or complex editing requirements."
  },
  {
    icon: "✅",
    title: "Cost-Effective Scaling",
    description: "Produce unlimited videos at a fraction of traditional production costs."
  },
  {
    icon: "✅",
    title: "Simple No-Code Platform",
    description: "User-friendly interface that requires no technical expertise to create professional content."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gulf-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Our Platform Is Different</h2>
          <p className="section-subtitle">
            We don't simply translate Western AI products. We build from the Gulf, for the Gulf.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gulf-primary mb-2">{feature.title}</h3>
              <p className="text-gulf-dark/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

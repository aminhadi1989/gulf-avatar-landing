import React from 'react';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-gulf-dark text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">GulfAvatar</h3>
        <p className="text-white/70">
          The Gulf's first AI Avatar Video Platform tailored for the GCC region.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="text-white/70 hover:text-gulf-gold">Features</a></li>
          <li><a href="#use-cases" className="text-white/70 hover:text-gulf-gold">Use Cases</a></li>
          <li><a href="#how-it-works" className="text-white/70 hover:text-gulf-gold">How It Works</a></li>
          <li><a href="#early-access" className="text-white/70 hover:text-gulf-gold">Early Access</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <p className="text-white/70 mb-2">info@gulfavatar.com</p>
        <p className="text-white/70">Dubai, UAE | Riyadh, KSA</p>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
      <p>&copy; {new Date().getFullYear()} GulfAvatar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

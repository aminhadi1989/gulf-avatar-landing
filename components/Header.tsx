import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold text-gulf-primary">
          Gulf<span className="text-gulf-accent">Avatar</span>
        </h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gulf-dark hover:text-gulf-accent">Features</a>
          <a href="#use-cases" className="text-gulf-dark hover:text-gulf-accent">Use Cases</a>
          <a href="#how-it-works" className="text-gulf-dark hover:text-gulf-accent">How It Works</a>
          <a href="#contact" className="text-gulf-dark hover:text-gulf-accent">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-gulf-primary text-gulf-primary hover:bg-gulf-primary hover:text-white"
          >
            Login
          </Button>
          <Button 
            className="bg-gulf-accent text-white hover:bg-gulf-accent/90"
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

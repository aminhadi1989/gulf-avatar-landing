import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gulf-accent blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-gulf-secondary blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center animate-fade-in [--animation-delay:200ms]">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gulf-primary">
          The First Gulf Arabic<br />
          <span className="text-gulf-accent">AI Avatar Platform</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl text-gulf-dark/80">
          Create authentic, culturally appropriate AI videos with native Gulf Arabic dialects for training, government, and e-learning across the GCC region.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            size="lg" 
            className="bg-gulf-primary hover:bg-gulf-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gulf-accent text-gulf-accent hover:bg-gulf-accent hover:text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>
      </div>
      
      {/* Mock video player */}
      <div className="mt-16 container relative z-10 mx-auto px-4 animate-fade-in [--animation-delay:400ms]">
        <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gulf-primary to-gulf-accent opacity-80 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm mx-auto">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                  <svg className="h-8 w-8 text-gulf-primary" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
              <p className="font-bold text-xl">AI Avatar Demo</p>
              <p className="text-sm opacity-80">(Click Get Early Access to view)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

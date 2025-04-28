import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Users, Video } from 'lucide-react';

const useCases = [
  {
    icon: <Users className="h-10 w-10 text-gulf-accent" />,
    title: "Government & Public Sector",
    description: "Public awareness campaigns, citizen education, and smart city kiosks with culturally relevant communication.",
    color: "bg-gulf-accent/10"
  },
  {
    icon: <Users className="h-10 w-10 text-gulf-primary" />,
    title: "Healthcare Providers",
    description: "Patient onboarding, hospital instructions, and healthcare education in authentic Gulf Arabic dialects.",
    color: "bg-gulf-primary/10"
  },
  {
    icon: <Video className="h-10 w-10 text-gulf-secondary" />,
    title: "Hospitality & Tourism",
    description: "Welcome videos, staff training for customer service, safety protocols in the local dialect.",
    color: "bg-gulf-secondary/10"
  },
  {
    icon: <Video className="h-10 w-10 text-gulf-gold" />,
    title: "Corporate Training",
    description: "ESG training, cybersecurity awareness, and workplace safety in Gulf Arabic for better engagement.",
    color: "bg-gulf-gold/10"
  },
  {
    icon: <Users className="h-10 w-10 text-gulf-accent" />,
    title: "E-Learning & Universities",
    description: "Online course localization and micro-learning modules with Arabic-speaking avatars for education.",
    color: "bg-gulf-accent/10"
  },
  {
    icon: <Video className="h-10 w-10 text-gulf-primary" />,
    title: "Retail & Marketing",
    description: "Product explainer videos and Arabic short-form content for social media and digital advertisements.",
    color: "bg-gulf-primary/10"
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle">
            Our platform helps organizations across the Gulf region create authentic Arabic video content at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${useCase.color} rounded-t-lg`}>
                <div className="mb-3">{useCase.icon}</div>
                <CardTitle className="text-xl text-gulf-dark">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gulf-dark/80 text-base">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
);
};

export default UseCases;

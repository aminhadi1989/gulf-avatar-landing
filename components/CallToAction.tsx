import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CallToAction: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [organization, setOrganization] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !organization) {
      toast({
        title: "Please fill all fields",
        description: "Both email and organization are required.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Thanks for your interest!",
      description: "We'll contact you soon about early access to our platform.",
    });
    setEmail('');
    setOrganization('');
  };

  return (
    <section id="early-access" className="py-20 bg-gulf-primary text-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Pilot Program Invitation</h2>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          We are onboarding a select group of early access partners from government departments, hospitals, educational institutions, and corporations in the Gulf region.
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">Email Address</label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="organization" className="block text-sm">Organization</label>
            <Input
              id="organization"
              type="text"
              placeholder="Your Organization"
              value={organization}
              onChange={e => setOrganization(e.target.value)}
              className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gulf-gold hover:bg-gulf-gold/90 text-gulf-dark"
          >
            Join Early Access
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;

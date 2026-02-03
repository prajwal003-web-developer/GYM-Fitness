import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, Send, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Classes', href: '#features' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const openingHours = [
  { day: 'Monday - Friday', hours: '24 Hours' },
  { day: 'Saturday', hours: '24 Hours' },
  { day: 'Sunday', hours: '24 Hours' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-2xl tracking-wider">11 Fitness</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Transform your body and mind at the city's premier fitness destination. 
              State-of-the-art equipment, expert trainers, and a community that inspires.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-xl mb-6">OPENING HOURS</h4>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-muted-foreground">
                  <span>{item.day}</span>
                  <span className="text-primary">{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-center">
                <span className="text-primary font-semibold">24/7 Access</span>
                <br />
                <span className="text-muted-foreground">For all members</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xl mb-6">NEWSLETTER</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe for fitness tips, exclusive offers, and motivation.
            </p>
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center"
              >
                <p className="text-primary font-medium">Thanks for subscribing!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Check your inbox for confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-glow w-full pr-12"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 11 Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

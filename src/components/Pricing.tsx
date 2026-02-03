import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 999,
    description: 'Perfect for beginners starting their fitness journey',
    icon: Zap,
    features: [
      'Full gym access',
      'Locker room access',
      'Basic equipment usage',
      'Free WiFi',
      '2 guest passes/month',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 1499,
    description: 'Most popular choice for serious fitness enthusiasts',
    icon: Star,
    features: [
      'Everything in Basic',
      'All group classes',
      '2 personal training sessions',
      'Nutrition consultation',
      'Sauna & steam room',
      'Unlimited guest passes',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: 1999,
    description: 'Ultimate package for maximum transformation',
    icon: Crown,
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Priority class booking',
      'Monthly body composition',
      'Recovery massage (2x/month)',
      'Exclusive member events',
      'Premium locker',
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative glass-card-hover p-8 flex h-full flex-col ${
        plan.popular ? 'border-primary/50 scale-105 lg:scale-110' : ''
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-4 mt-5 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
        plan.popular ? 'bg-primary/20' : 'bg-muted'
      }`}>
        <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
      </div>

      {/* Plan Details */}
      <h3 className="font-display text-2xl">{plan.name}</h3>
      <p className="text-muted-foreground text-sm mt-2 mb-6">{plan.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-display text-gradient">₹{plan.price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
              plan.popular ? 'text-primary' : 'text-muted-foreground'
            }`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        target='_blank'
        href={`https://wa.me/+917479109758?text=Hello%20I%20want%20to%20contact%20you%20for ${plan.name} Plan priced for ${plan.price}` }
        
        className={`mt-8 py-4 rounded-full font-semibold text-center transition-all duration-300 ${
          plan.popular
            ? 'btn-primary'
            : 'border-2 border-border hover:border-primary hover:text-primary'
        }`}
      >
        Get Started
      </a>
    </motion.div>
  );
};

const Pricing = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            INVEST IN YOUR <span className="text-gradient">FUTURE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your goals. All memberships include a 7-day free trial.
          </p>
        </motion.div>

        {/* Limited Time Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-4 max-w-md mx-auto mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              🔥
            </motion.div>
            <span className="text-sm font-medium">
              <span className="text-primary">Limited Offer:</span> First month 50% off!
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

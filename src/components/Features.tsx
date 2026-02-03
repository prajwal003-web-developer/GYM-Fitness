import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Users, Apple, Clock, Waves, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers who craft personalized workout plans for your goals.',
  },
  {
    icon: HeartPulse,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights from leading fitness brands worldwide.',
  },
  {
    icon: Apple,
    title: 'Nutrition Plans',
    description: 'Expert nutritionists create customized meal plans to fuel your transformation.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy classes from HIIT to yoga, led by motivating instructors.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock access to all facilities.',
  },
  {
    icon: Waves,
    title: 'Sauna & Recovery',
    description: 'Premium recovery amenities including sauna, steam room, and massage services.',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-8 group"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <feature.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="floating-shape w-[500px] h-[500px] -top-64 right-0 opacity-10" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            EVERYTHING YOU NEED TO <span className="text-gradient">SUCCEED</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide all the tools, guidance, and motivation you need to achieve your fitness goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

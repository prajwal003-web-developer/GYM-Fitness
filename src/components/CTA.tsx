import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="floating-shape w-[400px] h-[400px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />

          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
          >
            <Zap className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Content */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            READY TO
            <br />
            <span className="text-gradient glow-text">TRANSFORM?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Join thousands who have already transformed their lives. Your journey to a stronger, 
            healthier you starts with a single step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2 animate-pulse-glow"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a href="#pricing" className="btn-outline">
              View Pricing
            </a>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-8">
            ✓ No commitment required &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ First week free
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Dummy Name',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop',
    bio: '10+ years experience. Former Olympic athlete.',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Dummy Name',
    specialty: 'HIIT & Functional Training',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop',
    bio: 'Certified CrossFit L3. Nutrition specialist.',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Dummy Name',
    specialty: 'Boxing & MMA',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
    bio: 'Pro boxing coach. 15 years combat sports.',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Dummy Name',
    specialty: 'Yoga & Mindfulness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
    bio: 'RYT-500. Holistic wellness practitioner.',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
];

const TrainerCard = ({ trainer, index }: { trainer: typeof trainers[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Social Links - Appear on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {[
            { icon: Instagram, href: trainer.social.instagram },
            { icon: Twitter, href: trainer.social.twitter },
            { icon: Linkedin, href: trainer.social.linkedin },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-primary text-sm font-medium">{trainer.specialty}</span>
        <h3 className="font-display text-2xl mt-1">{trainer.name}</h3>
        <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {trainer.bio}
        </p>
      </div>
    </motion.div>
  );
};

const Trainers = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="trainers" className="section-padding relative overflow-hidden">
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
            Expert Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            MEET YOUR <span className="text-gradient">TRAINERS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our certified professionals are dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

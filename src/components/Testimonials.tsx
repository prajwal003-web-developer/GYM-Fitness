import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Candidate 1',
    role: 'Lost 30 lbs in 4 months',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: "11 Fitness completely transformed my life. The trainers are incredibly supportive, and the community here pushes you to be your best. I've never felt stronger!",
  },
  {
    name: 'Candidate 2',
    role: 'Gained 15 lbs muscle',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: "Best gym I've ever been to. The equipment is top-notch, and having 24/7 access means I can work out on my schedule. The results speak for themselves.",
  },
  {
    name: 'Candidate 3',
    role: 'Marathon runner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: "The personalized training program helped me shave 20 minutes off my marathon time. The nutrition guidance was a game-changer for my performance.",
  },
  {
    name: 'Candidate 4',
    role: 'Business executive',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    text: "As a busy professional, I needed a gym that fits my schedule. 11 Fitness's 24/7 access and efficient training programs are exactly what I needed.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-primary/30 mb-6" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary fill-primary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-primary">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            SUCCESS <span className="text-gradient">STORIES</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our members who transformed their lives with 11 Fitness.
          </p>
        </motion.div>

        {/* Testimonials Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

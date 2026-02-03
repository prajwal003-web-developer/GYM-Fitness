import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    title: 'Main Gym Floor',
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    title: 'Free Weights Area',
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    title: 'Cardio Zone',
  },
  {
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop',
    title: 'CrossFit Box',
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
    title: 'Yoga Studio',
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    title: 'Boxing Ring',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="floating-shape w-[600px] h-[600px] -bottom-64 -left-64 opacity-10" />

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
            Our Facility
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            TAKE A <span className="text-gradient">TOUR</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our state-of-the-art facilities designed for your ultimate fitness experience.
          </p>
        </motion.div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-display text-xl">{image.title}</h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hidden lg:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hidden lg:flex">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Grid Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-lg">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <h4 className="font-display text-2xl text-center">
                {galleryImages[selectedImage].title}
              </h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

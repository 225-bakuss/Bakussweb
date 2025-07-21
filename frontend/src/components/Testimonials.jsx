import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { mockTestimonials } from '../data/mockData';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mockTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mockTestimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mockTestimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-1 text-primary">Témoignages Clients</h2>
          <p className="section-subtitle body-lg text-secondary">
            Ce que nos clients pensent de nos services
          </p>
        </motion.div>

        <div ref={ref} className="testimonials-carousel">
          <div className="carousel-container">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="testimonial-slide"
              >
                <div className="testimonial-card design-card">
                  <div className="quote-icon">
                    <Quote size={32} className="text-green" />
                  </div>

                  <div className="testimonial-rating">
                    {renderStars(mockTestimonials[currentIndex].rating)}
                  </div>

                  <blockquote className="testimonial-content body-lg text-secondary">
                    "{mockTestimonials[currentIndex].content}"
                  </blockquote>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mockTestimonials[currentIndex].name}`}
                        alt={mockTestimonials[currentIndex].name}
                      />
                    </div>
                    <div className="author-info">
                      <cite className="author-name heading-4 text-primary">
                        {mockTestimonials[currentIndex].name}
                      </cite>
                      <div className="author-position body-sm text-muted">
                        {mockTestimonials[currentIndex].position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="carousel-controls">
              <motion.button
                onClick={prevTestimonial}
                className="carousel-btn prev-btn"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="carousel-btn next-btn"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Dots indicator */}
            <div className="carousel-dots">
              {mockTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All testimonials preview (hidden on mobile) */}
          <motion.div
            className="testimonials-preview desktop-only"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`testimonial-preview-card ${index === currentIndex ? 'active' : ''}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="preview-avatar">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="preview-info">
                  <div className="preview-name body-sm text-primary">
                    {testimonial.name}
                  </div>
                  <div className="preview-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
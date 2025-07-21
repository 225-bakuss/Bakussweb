import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  CreditCard, 
  Settings,
  MessageCircle 
} from 'lucide-react';
import { mockServices } from '../data/mockData';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const serviceIcons = {
    'site-vitrine': Globe,
    'site-complet': Globe,
    'e-commerce': ShoppingCart,
    'logo': Palette,
    'carte-visite': CreditCard,
    'maintenance': Settings
  };

  const handleServiceOrder = (service) => {
    const message = `Bonjour, je suis intéressé(e) par le service: ${service.title}. Pouvez-vous me donner plus d'informations?`;
    window.open(`https://wa.me/2250556109225?text=${encodeURIComponent(message)}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-1 text-primary">Nos Services</h2>
          <p className="section-subtitle body-lg text-secondary">
            Des solutions web complètes pour développer votre activité en ligne
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {mockServices.map((service, index) => {
            const IconComponent = serviceIcons[service.id] || Globe;
            
            return (
              <motion.div
                key={service.id}
                className="service-card design-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-icon service-icon">
                  <IconComponent size={28} color="white" />
                </div>
                
                <h3 className="card-title service-title">
                  {service.title}
                </h3>
                
                <p className="card-description service-description">
                  {service.description}
                </p>

                <div className="service-features">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="feature-item body-sm text-muted">
                      • {feature}
                    </div>
                  ))}
                </div>

                <div className="service-price">
                  <span className="price-text heading-4 text-green">
                    {service.price}
                  </span>
                </div>

                <motion.button
                  onClick={() => handleServiceOrder(service)}
                  className="btn-primary service-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={18} />
                  Commander
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2250556109225?text=Bonjour, je souhaite demander un site web.', '_blank');
  };

  return (
    <section id="accueil" className="hero-section">
      <div className="hero-background">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="hero-blur-overlay"></div>
      </div>
      
      <div className="section-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1 
            className="hero-title display-lg text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Votre présence en ligne commence ici
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle body-xl text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pour les entrepreneurs de Côte d'Ivoire et d'ailleurs
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="btn-primary hero-cta-button"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Demander un site web
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number heading-3 text-green">50+</span>
              <span className="stat-label body-sm text-muted">Projets réalisés</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number heading-3 text-green">100%</span>
              <span className="stat-label body-sm text-muted">Clients satisfaits</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number heading-3 text-green">24h</span>
              <span className="stat-label body-sm text-muted">Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
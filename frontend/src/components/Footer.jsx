import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Globe,
  Heart
} from 'lucide-react';
import { mockCompanyInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = `Bonjour, je souhaite obtenir plus d'informations sur vos services.`;
    window.open(`https://wa.me/${mockCompanyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Site vitrine', href: '#services' },
      { name: 'Site e-commerce', href: '#services' },
      { name: 'Création logo', href: '#services' },
      { name: 'Maintenance', href: '#services' }
    ],
    company: [
      { name: 'À propos', href: '#apropos' },
      { name: 'Nos réalisations', href: '#realisations' },
      { name: 'Témoignages', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Support client', href: '#' },
      { name: 'Devis gratuit', action: handleWhatsAppClick },
      { name: 'Maintenance', href: '#services' }
    ]
  };

  return (
    <footer className="footer-section">
      <div className="section-container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Company info */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <motion.button
                onClick={scrollToTop}
                className="logo-container footer-logo-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="logo-text">Bakuss</span>
                <span className="logo-subtitle">Web Services</span>
              </motion.button>
            </div>
            
            <p className="footer-description body-md text-secondary">
              {mockCompanyInfo.description}
            </p>

            <div className="footer-contact-info">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon text-green" />
                <span className="body-sm text-secondary">{mockCompanyInfo.location}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon text-green" />
                <span className="body-sm text-secondary">{mockCompanyInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon text-green" />
                <span className="body-sm text-secondary">{mockCompanyInfo.email}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="footer-social">
              <motion.button
                onClick={handleWhatsAppClick}
                className="social-btn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </motion.button>
              <motion.button
                onClick={() => window.open(mockCompanyInfo.facebook, '_blank')}
                className="social-btn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.button>
              <motion.button
                onClick={scrollToTop}
                className="social-btn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Site web"
              >
                <Globe size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Footer links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-column">
              <h4 className="footer-column-title heading-4 text-primary">Services</h4>
              <ul className="footer-link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link body-sm text-secondary"
                      whileHover={{ x: 4, color: 'var(--brand-green)' }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title heading-4 text-primary">Entreprise</h4>
              <ul className="footer-link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link body-sm text-secondary"
                      whileHover={{ x: 4, color: 'var(--brand-green)' }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title heading-4 text-primary">Support</h4>
              <ul className="footer-link-list">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={link.action || (() => scrollToSection(link.href))}
                      className="footer-link body-sm text-secondary"
                      whileHover={{ x: 4, color: 'var(--brand-green)' }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA section in footer */}
          <motion.div
            className="footer-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer-cta-card design-card">
              <h4 className="footer-cta-title heading-4 text-primary">
                Prêt à démarrer votre projet ?
              </h4>
              <p className="footer-cta-text body-md text-secondary">
                Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit.
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="btn-primary footer-cta-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                Demander un devis
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p className="body-sm text-muted">
                © {currentYear} {mockCompanyInfo.name}. Tous droits réservés.
              </p>
            </div>
            
            <div className="footer-made-with">
              <p className="body-sm text-muted">
                Fait avec <Heart size={14} className="heart-icon text-green" fill="currentColor" /> 
                à {mockCompanyInfo.location}
              </p>
            </div>

            <div className="footer-legal">
              <motion.button 
                className="legal-link body-sm text-muted"
                whileHover={{ color: 'var(--brand-green)' }}
              >
                Mentions légales
              </motion.button>
              <span className="legal-separator">•</span>
              <motion.button 
                className="legal-link body-sm text-muted"
                whileHover={{ color: 'var(--brand-green)' }}
              >
                Politique de confidentialité
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
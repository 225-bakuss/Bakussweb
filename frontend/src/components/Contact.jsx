import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Clock,
  Facebook
} from 'lucide-react';
import { mockCompanyInfo } from '../data/mockData';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je souhaite obtenir plus d'informations sur vos services web. Pouvez-vous me contacter?`;
    window.open(`https://wa.me/${mockCompanyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      info: mockCompanyInfo.phone,
      action: `tel:+${mockCompanyInfo.whatsapp}`,
      description: 'Appelez-nous directement'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: mockCompanyInfo.phone,
      action: handleWhatsAppContact,
      description: 'Chat instantané'
    },
    {
      icon: Mail,
      title: 'Email',
      info: mockCompanyInfo.email,
      action: `mailto:${mockCompanyInfo.email}`,
      description: 'Envoyez-nous un email'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      info: mockCompanyInfo.location,
      action: '#',
      description: 'Visitez notre bureau'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-1 text-primary">Contactez-nous</h2>
          <p className="section-subtitle body-lg text-secondary">
            Prêt à démarrer votre projet ? Parlons-en ensemble !
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact methods */}
          <motion.div
            ref={ref}
            className="contact-methods"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const isClickable = typeof method.action === 'function' || method.action.startsWith('tel:') || method.action.startsWith('mailto:');
              
              return (
                <motion.div
                  key={index}
                  className={`contact-method-card design-card ${isClickable ? 'clickable' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={typeof method.action === 'function' ? method.action : 
                           isClickable ? () => window.open(method.action, '_self') : undefined}
                >
                  <div className="card-icon contact-icon">
                    <IconComponent size={24} color="white" />
                  </div>
                  
                  <h3 className="contact-method-title heading-4 text-primary">
                    {method.title}
                  </h3>
                  
                  <p className="contact-method-info body-md text-green">
                    {method.info}
                  </p>
                  
                  <p className="contact-method-description body-sm text-muted">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-form-card design-card">
              <h3 className="form-title heading-3 text-primary">
                Envoyez-nous un message
              </h3>
              <p className="form-subtitle body-md text-secondary">
                Décrivez votre projet et nous vous répondrons rapidement
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label body-sm text-primary">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label body-sm text-primary">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label body-sm text-primary">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Décrivez votre projet en détail..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary form-submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock size={18} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={48} className="success-icon text-green" />
                  <h4 className="success-title heading-4 text-primary">
                    Message envoyé avec succès !
                  </h4>
                  <p className="success-message body-md text-secondary">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick action section */}
        <motion.div
          className="contact-quick-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="quick-actions-card">
            <h3 className="quick-actions-title heading-4 text-primary">
              Besoin d'une réponse rapide ?
            </h3>
            <p className="quick-actions-text body-md text-secondary">
              Contactez-nous directement via WhatsApp pour une réponse immédiate
            </p>
            <div className="quick-actions-buttons">
              <motion.button
                onClick={handleWhatsAppContact}
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.button>
              <motion.button
                onClick={() => window.open(mockCompanyInfo.facebook, '_blank')}
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
                Facebook
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
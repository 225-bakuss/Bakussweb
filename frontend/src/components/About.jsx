import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award, Zap } from 'lucide-react';
import { mockCompanyInfo } from '../data/mockData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Digitaliser les PME et entrepreneurs ivoiriens avec des solutions web modernes et accessibles.'
    },
    {
      icon: Users,
      title: 'Approche',
      description: 'Une écoute attentive de vos besoins pour créer des sites web qui génèrent des résultats concrets.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Des sites web rapides, sécurisés et optimisés pour les moteurs de recherche et les mobiles.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous utilisons les dernières technologies pour vous offrir une expérience utilisateur exceptionnelle.'
    }
  ];

  const stats = [
    { label: 'Projets réalisés', value: mockCompanyInfo.clients },
    { label: 'Taux de satisfaction', value: mockCompanyInfo.satisfaction },
    { label: 'Années d\'expérience', value: mockCompanyInfo.experience },
    { label: 'Services proposés', value: `${mockCompanyInfo.services}+` }
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
    <section id="apropos" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-1 text-primary">À propos de nous</h2>
          <p className="section-subtitle body-lg text-secondary">
            Découvrez qui nous sommes et pourquoi choisir Bakuss Web Services
          </p>
        </motion.div>

        <div className="about-content">
          {/* Company Description */}
          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="description-card design-card">
              <h3 className="heading-3 text-primary">Notre Histoire</h3>
              <p className="body-lg text-secondary about-text">
                {mockCompanyInfo.description}
              </p>
              <p className="body-md text-secondary">
                Basés à {mockCompanyInfo.location}, nous accompagnons les entreprises 
                dans leur transformation digitale en créant des sites web qui reflètent 
                leur identité et atteignent leurs objectifs commerciaux.
              </p>
              
              <div className="about-highlight">
                <h4 className="heading-4 text-green">Notre Engagement</h4>
                <p className="body-md text-secondary">
                  Créer des solutions web qui non seulement impressionnent visuellement, 
                  mais génèrent aussi des résultats mesurables pour votre business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            ref={ref}
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="value-card design-card"
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="card-icon value-icon">
                    <IconComponent size={24} color="white" />
                  </div>
                  <h4 className="value-title heading-4 text-primary">
                    {value.title}
                  </h4>
                  <p className="value-description body-md text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <span className="stat-number display-md text-green">
                    {stat.value}
                  </span>
                  <span className="stat-label body-sm text-muted">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
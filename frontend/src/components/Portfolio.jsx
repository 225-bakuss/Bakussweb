import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Eye } from 'lucide-react';
import { mockPortfolio } from '../data/mockData';

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Site vitrine', 'E-commerce', 'Site professionnel', 'Site corporate'];

  const filteredProjects = filter === 'all' 
    ? mockPortfolio 
    : mockPortfolio.filter(project => project.category === filter);

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

  const handleProjectView = (project) => {
    const message = `Bonjour, j'aimerais voir le projet "${project.title}" ou avoir un projet similaire. Pouvez-vous me donner plus d'informations?`;
    window.open(`https://wa.me/2250556109225?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="realisations" className="portfolio-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-1 text-primary">Nos Réalisations</h2>
          <p className="section-subtitle body-lg text-secondary">
            Découvrez quelques projets que nous avons réalisés pour nos clients
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Tous' : category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card design-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              layout
            >
              <div className="portfolio-image">
                <img 
                  src={`https://picsum.photos/400/300?random=${project.id}`} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <motion.button
                    onClick={() => handleProjectView(project)}
                    className="portfolio-view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="portfolio-content">
                <div className="portfolio-category body-sm text-green">
                  {project.category}
                </div>
                
                <h3 className="portfolio-title heading-4 text-primary">
                  {project.title}
                </h3>
                
                <p className="portfolio-description body-md text-secondary">
                  {project.description}
                </p>

                <div className="portfolio-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag body-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => handleProjectView(project)}
                  className="btn-secondary portfolio-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  Voir le projet
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
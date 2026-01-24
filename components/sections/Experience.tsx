'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'NOVACIS DIGITAL',
    role: 'Machine Learning Engineer',
    duration: 'November 2023 – May 2024',
    location: 'India',
    achievements: [
      'Built SageMaker-based document AI system with LayoutLM + BERT (18% F1 improvement on 10K+ legal documents)',
      'Deployed OCR + LLM pipeline on Amazon EKS (review time reduced to <10 minutes per document)',
      'Built FAISS-based semantic search system (300ms retrieval, 60% reduction in analyst lookup time)',
      'Benchmarked GPT-4 vs Claude for contract analysis (35% cost reduction)',
      'Productionized AWS ML pipelines for batch and real-time workflows',
    ],
    tech: ['SageMaker', 'LayoutLM', 'BERT', 'EKS', 'FAISS', 'GPT-4', 'Claude', 'AWS'],
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    company: 'RMK Research Lab',
    role: 'Machine Learning Intern',
    duration: 'August 2023 – January 2024',
    location: 'India',
    achievements: [
      'Developed explainable ECG-based ML pipeline with ensemble models and LIME',
      'Optimized ensemble classifiers (XGBoost, RF, GB) achieving 6-8% accuracy gains',
      'Built reproducible ML pipelines on 1,190+ clinical records',
      'Achieved 93.1% accuracy and 0.95 ROC-AUC',
    ],
    tech: ['XGBoost', 'Random Forest', 'Gradient Boosting', 'LIME', 'Python', 'Scikit-learn'],
    color: 'from-secondary-500 to-secondary-600',
  },
]

export default function Experience() {
  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-xl hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-dark-50">{exp.company}</h3>
                        <p className="text-lg text-secondary-400 font-semibold">{exp.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-dark-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark-200 mb-3">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-400 mt-2 flex-shrink-0"></div>
                        <p className="text-dark-300 leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800/50 text-secondary-400 rounded-full text-sm font-medium border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'Nvidia Edge AI Specialization',
    issuer: 'Nvidia',
    link: '#',
    description: 'Comprehensive specialization covering edge AI deployment, optimization, and real-time inference.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    title: 'Stanford Machine Learning Specialization',
    issuer: 'Stanford University',
    link: '#',
    description: 'In-depth coverage of machine learning algorithms, theory, and practical applications.',
    gradient: 'from-secondary-500 to-secondary-600',
  },
]

export default function Certifications() {
  return (
    <section className="section-container bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-gradient">Certifications</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-8 rounded-xl h-full flex flex-col hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cert.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-50 mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-secondary-400 font-semibold">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-dark-300 leading-relaxed flex-1">
                  {cert.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 glass-effect p-8 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-lg text-dark-300 leading-relaxed">
              Continuously investing in professional development to stay at the forefront of AI/ML innovation 
              and bring cutting-edge knowledge to real-world applications.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

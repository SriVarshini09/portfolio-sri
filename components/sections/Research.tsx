'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { FileText, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'Lightweight Channel Attention for Efficient CNNs',
    description: 'Designed and evaluated lightweight channel attention module (LCA) achieving competitive accuracy with negligible parameter and latency overhead. Tested on ResNet-18 and MobileNetV2.',
    status: 'Published',
    link: '#',
    highlights: [
      'Negligible parameter overhead',
      'Competitive accuracy on benchmark datasets',
      'Tested on ResNet-18 and MobileNetV2',
    ],
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    title: 'EDAT-Lite: Predictive Difficulty-Aware Training for Neural Networks',
    description: 'Proposed lightweight difficulty-aware training framework that learns and predicts hard examples using auxiliary head. Improved interpretability of training dynamics while preserving accuracy on MNIST.',
    status: 'Published',
    link: '#',
    highlights: [
      'Lightweight training framework',
      'Improved interpretability of training dynamics',
      'Preserved accuracy while enhancing explainability',
    ],
    gradient: 'from-secondary-500 to-secondary-600',
  },
]

export default function Research() {
  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            Research <span className="text-gradient">Publications</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl h-full flex flex-col hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${pub.gradient} mb-6`}></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pub.gradient} flex items-center justify-center flex-shrink-0`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-50 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-secondary-500/20 text-secondary-400 rounded-full text-xs font-semibold">
                      {pub.status}
                    </span>
                  </div>
                </div>

                <p className="text-dark-300 mb-6 leading-relaxed">
                  {pub.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-200 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {pub.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-dark-400">{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Read Paper</span>
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 glass-effect p-8 rounded-xl text-center">
            <p className="text-lg text-dark-300 leading-relaxed">
              Committed to advancing the field of AI/ML through rigorous research and practical applications. 
              Focused on developing efficient, interpretable, and scalable machine learning solutions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

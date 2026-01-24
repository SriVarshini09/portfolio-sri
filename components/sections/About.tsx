'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Award, TrendingUp, Target } from 'lucide-react'

const achievements = [
  { icon: TrendingUp, value: '18%', label: 'F1 Score Improvement', description: 'Legal Document Processing' },
  { icon: Target, value: '60%', label: 'Reduction', description: 'Analyst Lookup Time' },
  { icon: Award, value: '35%', label: 'Cost Reduction', description: 'LLM Inference' },
]

export default function About() {
  return (
    <section className="section-container bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-secondary-400 mb-6">Current</h3>
                <p className="text-lg text-dark-200 leading-relaxed">
                  Master's student at <span className="text-secondary-400 font-semibold">Rochester Institute of Technology</span> (Aug 2024 - May 2026), 
                  specializing in Machine Learning Applications, Distributed Systems, and Engineering Scalable Systems.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-secondary-400 mb-6">Background</h3>
                <p className="text-lg text-dark-200 leading-relaxed">
                  Bachelor's in Computer Science from <span className="text-secondary-400 font-semibold">RMK Engineering College</span>, India (2019-2023). 
                  Building production-grade AI systems with focus on document intelligence, semantic search, and MLOps.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-secondary-400 mb-6">Expertise</h3>
                <p className="text-lg text-dark-200 leading-relaxed">
                  Specialized in LLMs, RAG systems, Computer Vision, and Cloud-native ML deployment. 
                  Passionate about transforming research into production-ready solutions that drive measurable business impact.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-secondary-400 group-hover:text-accent-400 transition-colors" />
                  <div className="text-4xl font-bold text-gradient mb-2">{achievement.value}</div>
                  <div className="text-lg font-semibold text-dark-200 mb-1">{achievement.label}</div>
                  <div className="text-sm text-dark-400">{achievement.description}</div>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

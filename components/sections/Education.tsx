'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const education = [
  {
    institution: 'Rochester Institute of Technology',
    degree: "Master's in Artificial Intelligence",
    duration: 'August 2024 - May 2026 (Graduated)',
    location: 'Rochester, NY',
    focus: ['Machine Learning Applications', 'Distributed Systems', 'Engineering Scalable Systems'],
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    institution: 'RMK Engineering College',
    degree: "Bachelor's in Computer Science and Engineering",
    duration: 'August 2019 - May 2023',
    location: 'India',
    focus: ['Computer Science Fundamentals', 'Software Engineering', 'AI/ML Research'],
    color: 'from-secondary-500 to-secondary-600',
  },
]

export default function Education() {
  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-gradient">Education</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary-500 to-secondary-600 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div className="glass-effect p-8 rounded-xl hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300 md:w-11/12">
                    <div className={`absolute top-8 ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} hidden md:block`}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2 md:hidden">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-dark-50 mb-2">{edu.institution}</h3>
                    <p className="text-xl text-secondary-400 font-semibold mb-4">{edu.degree}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-dark-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-dark-800/50 text-dark-200 rounded-full text-sm border border-dark-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

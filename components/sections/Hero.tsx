'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from '@/components/3d/ParticleBackground'
import Image from 'next/image'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/1769216819922_image.jpeg"
                alt="Tulasi Venkata Sri Varshini Padamata"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-dark-50 mb-2">Tulasi Venkata</span>
              <span className="block text-gradient">Sri Varshini Padamata</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-base sm:text-lg md:text-xl text-dark-200 leading-relaxed">
                Production focused Machine Learning Engineer specializing in scalable AI systems and enterprise MLOps. Currently advancing ML expertise through Master's in Artificial Intelligence at Rochester Institute of Technology while architecting robust solutions spanning document intelligence, real time feature engineering, and LLM powered applications. Proven track record deploying high performance ML pipelines on AWS and Kubernetes that deliver measurable impact: 35% inference cost reduction, 60% faster retrieval times, and 84% automation efficiency. Published researcher committed to bridging cutting edge AI research with production grade implementations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass-effect hover:bg-dark-800/60 text-dark-50 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-400 hover:text-secondary-300 transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}

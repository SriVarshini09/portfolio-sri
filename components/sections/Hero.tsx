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
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-400 via-accent-400 to-secondary-500 blur-xl opacity-60 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary-400/50 shadow-2xl shadow-secondary-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 z-10"></div>
                <Image
                  src="/uploads/1769216819922_image.png"
                  alt="Tulasi Venkata Sri Varshini Padamata"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-secondary-400/30"
                style={{ padding: '10px' }}
              ></motion.div>
            </motion.div>
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
              <p className="text-base sm:text-lg md:text-xl text-dark-200 leading-relaxed mb-4">
                ML Engineer specializing in production-scale AI systems with proven expertise in AWS MLOps, 
                document intelligence, and real-time semantic search. Delivered measurable impact: <span className="text-secondary-400 font-semibold">18% model performance gains</span>, 
                <span className="text-secondary-400 font-semibold"> 60% reduction in processing time</span>, and <span className="text-secondary-400 font-semibold">35% cost optimization</span> across 
                LLM deployments.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-dark-300 leading-relaxed">
                Expert in building end-to-end ML pipelines from research to production using PyTorch, Kubernetes, 
                and distributed systems. Specialized in document intelligence architectures (LayoutLM, BERT), 
                real-time semantic search (FAISS, Qdrant), and LLM optimization (GPT-4, Claude).
              </p>
              <p className="text-sm sm:text-base text-dark-400 mt-3">
                Currently advancing AI research at <span className="text-secondary-400">Rochester Institute of Technology</span> while 
                building production-ready AI solutions.
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

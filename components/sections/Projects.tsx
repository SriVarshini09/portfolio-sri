'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Real-Time Video Search Platform',
    description: 'Engineered CLIP-based video search indexing 25 videos with 380+ scene embeddings. Achieved 1.2s query latency with automatic scene detection at 0.4x speed and 78% boundary accuracy vs manual annotation.',
    achievements: [
      'Multimodal retrieval with 0.82 similarity score for top-ranked scenes',
      'Deployed full-stack application with React frontend',
      '78% boundary accuracy vs manual annotation',
    ],
    tech: ['CLIP', 'React', 'Python', 'Scene Detection', 'FastAPI'],
    github: '#',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    title: 'Real-Time Feature Store & ML Serving Platform',
    description: 'Architected streaming pipeline with Feast and Kafka processing 5,000 events/hour at 45ms latency. Deployed 3 models: fraud detection (88% accuracy), recommendation (0.76 NDCG@5), forecasting (12% MAPE).',
    achievements: [
      'Built monitoring with MLflow, Kubernetes metrics, auto-retraining triggers',
      'Feature drift detection and data quality checks',
      'Processing 5,000 events/hour at 45ms latency',
    ],
    tech: ['Feast', 'Kafka', 'Kubernetes', 'MLflow', 'Python', 'Docker'],
    github: '#',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    title: 'Multi-Agent Document Intelligence System',
    description: 'Multi-agent system achieving 82% accuracy on 150-document test set with <5s processing. RAG implementation with Qdrant processing 500+ chunks and 85% top-3 relevance across 50 semantic search queries.',
    achievements: [
      'Production FastAPI service with 84% reduction in manual entry time',
      '85% top-3 relevance across semantic search queries',
      'Sub-5 second processing time per document',
    ],
    tech: ['LangChain', 'Qdrant', 'FastAPI', 'RAG', 'Python', 'LLMs'],
    github: '#',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    title: 'Feature Store & ML Serving Platform',
    description: 'Unified feature store serving 8 production features with automated monitoring and drift detection. Distributed deployment with Kubernetes ensuring high availability and scalability.',
    achievements: [
      'Automated monitoring and drift detection',
      'Distributed deployment with Kubernetes',
      'Serving 8 production features',
    ],
    tech: ['Kubernetes', 'Docker', 'Python', 'MLOps', 'Monitoring'],
    github: '#',
    gradient: 'from-secondary-500 to-secondary-600',
  },
]

export default function Projects() {
  return (
    <section className="section-container bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl h-full flex flex-col group hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}></div>
                
                <h3 className="text-2xl font-bold text-dark-50 mb-4 group-hover:text-secondary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-dark-400">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800/50 text-secondary-400 rounded-full text-xs font-medium border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

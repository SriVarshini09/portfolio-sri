'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Brain, Cloud, Code, Database } from 'lucide-react'

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face Transformers',
      'Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)',
      'Computer Vision', 'NLP/NLU', 'Generative AI', 'Prompt Engineering', 'Deep Learning'
    ],
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: [
      'AWS (Bedrock, SageMaker, EKS, Lambda, CloudWatch, DynamoDB)',
      'Docker', 'Kubernetes', 'MLflow', 'Terraform', 'CI/CD Pipelines',
      'Model Context Protocol (MCP)', 'Palantir Foundry', 'Snowflake'
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    title: 'Programming & Data',
    icon: Code,
    skills: [
      'Python', 'PySpark', 'SQL', 'LangChain', 'FastAPI',
      'Pandas', 'NumPy', 'Git', 'GitHub Actions'
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: [
      'PostgreSQL', 'MongoDB', 'FAISS', 'Qdrant',
      'Vector Databases', 'DynamoDB'
    ],
    color: 'from-purple-500 to-purple-600',
  },
]

export default function Skills() {
  return (
    <section className="section-container bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-effect p-8 rounded-xl h-full hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-50">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-dark-800/50 text-dark-200 rounded-lg text-sm font-medium border border-dark-700 hover:border-secondary-500/50 hover:text-secondary-400 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 glass-effect p-8 rounded-xl text-center">
            <p className="text-lg text-dark-300 leading-relaxed">
              <span className="text-secondary-400 font-semibold">Continuous Learner</span> with a passion for staying 
              updated with the latest advancements in AI/ML. Experienced in translating cutting-edge research into 
              production-ready solutions that deliver measurable business value.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

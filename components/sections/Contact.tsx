'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Mail, Phone, Linkedin, Github, FileDown, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const mailtoLink = `mailto:srivarshini09.edu@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srivarshini09.edu@gmail.com',
      href: 'mailto:srivarshini09.edu@gmail.com',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '585-623-7981',
      href: 'tel:+15856237981',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/ptvsv/',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: 'https://github.com/SriVarshini09',
      color: 'from-secondary-500 to-secondary-600',
    },
  ]

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 via-transparent to-accent-500/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI/ML!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.a
                  href={contact.href}
                  target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                  rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl flex flex-col items-center text-center hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-200 mb-2">{contact.label}</h3>
                  <p className="text-sm text-dark-400 group-hover:text-secondary-400 transition-colors">
                    {contact.value}
                  </p>
                </motion.a>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-dark-50 mb-6 text-center">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-secondary-500 hover:bg-secondary-600 disabled:bg-dark-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-secondary-500/50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-dark-50 mb-6 text-center">Quick Actions</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-secondary-500/50"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>

                <motion.a
                  href="mailto:srivarshini09.edu@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-secondary-500/50"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Email</span>
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.9}>
          <footer className="mt-16 pt-8 border-t border-dark-700 text-center">
            <p className="text-dark-400 mb-4">
              © {new Date().getFullYear()} Tulasi Venkata Sri Varshini Padamata. All rights reserved.
            </p>
            <p className="text-sm text-dark-500">
              Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js
            </p>
          </footer>
        </AnimatedSection>
      </div>
    </section>
  )
}

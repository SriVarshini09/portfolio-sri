'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary-500/20 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.div>
  )
}

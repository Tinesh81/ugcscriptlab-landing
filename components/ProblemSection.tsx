'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [counts, setCounts] = useState({
    cost: 0,
    time: 0,
    testing: 0
  })

  const stats = [
    {
      value: '$150-500',
      label: 'Cost per UGC video',
      color: 'text-red-400',
      target: 500
    },
    {
      value: '2-3 hours',
      label: 'Time writing each script',
      color: 'text-yellow-400',
      target: 3
    },
    {
      value: '$2,000',
      label: 'Testing 10 variations',
      color: 'text-blue-400',
      target: 2000
    }
  ]

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        let currentStep = 0
        const increment = stat.target / steps

        const timer = setInterval(() => {
          currentStep++
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'cost' : index === 1 ? 'time' : 'testing']: Math.min(
              Math.floor(increment * currentStep),
              stat.target
            )
          }))

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, stepDuration)
      })
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            The Hidden Cost of UGC
          </motion.h2>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card-hover text-center group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`text-6xl font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {index === 0 ? `$${counts.cost}` : 
                   index === 1 ? `${counts.time} hours` : 
                   `$${counts.testing.toLocaleString()}`}
                </div>
                <div className="text-lg text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                Brands pay creators hundreds. But spend hours writing scripts first.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every UGC campaign starts with the same problem: writing scripts that convert. 
                Most brands spend 2-3 hours per script, testing multiple variations, and still 
                end up with generic content that doesn't resonate. The real cost isn't the creator 
                fee—it's the time and money spent on script development.
              </p>
            </div>
          </motion.div>

          {/* Visual Problem Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-lg">⏰</span>
                </div>
                <h4 className="text-xl font-semibold">Time Drain</h4>
              </div>
              <p className="text-gray-400">
                Hours spent researching hooks, writing copy, and creating shot lists 
                that could be spent on strategy and optimization.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 text-lg">💰</span>
                </div>
                <h4 className="text-xl font-semibold">Budget Waste</h4>
              </div>
              <p className="text-gray-400">
                Testing multiple script variations with expensive creator fees 
                instead of focusing on proven, high-converting content.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection

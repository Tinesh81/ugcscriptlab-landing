'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TestingCriteria = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const criteria = [
    {
      icon: '🎯',
      title: 'Hook Performance',
      description: 'Viral potential score',
      details: 'We analyze hook structure, emotional triggers, and curiosity gaps to predict viral potential',
      score: '92%',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: '🎬',
      title: 'Script Flow',
      description: 'Natural delivery rhythm',
      details: 'Ensures smooth transitions, proper pacing, and conversational flow that feels authentic',
      score: '88%',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: '📹',
      title: 'Shot Efficiency',
      description: 'Optimal filming sequence',
      details: 'Creates shot lists that maximize visual impact while minimizing production complexity',
      score: '95%',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: '🎭',
      title: 'Authenticity Markers',
      description: 'Hesitations, natural language',
      details: 'Includes natural pauses, hesitations, and conversational elements that build trust',
      score: '90%',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ]

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
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What We Test For
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Our AI evaluates every script across 4 critical dimensions
          </motion.p>

          {/* Testing Criteria Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {criteria.map((criterion, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`
                  relative glass rounded-2xl p-8 h-full
                  transition-all duration-300 group-hover:shadow-2xl
                  ${criterion.bgColor} ${criterion.borderColor}
                  border-2 group-hover:border-opacity-40
                `}>
                  {/* Score Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{criterion.score}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {criterion.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {criterion.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    {criterion.description}
                  </p>

                  {/* Details */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {criterion.details}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                    bg-gradient-to-r ${criterion.color}
                    transition-opacity duration-300
                  `} />

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                    bg-gradient-to-r ${criterion.color}
                    blur-xl -z-10 transition-opacity duration-300
                  `} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testing Process */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
                Our Testing Process
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Analyze</h4>
                  <p className="text-gray-400">
                    Each script is broken down into components and analyzed against our database of viral patterns.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Score</h4>
                  <p className="text-gray-400">
                    AI algorithms assign scores across all 4 dimensions based on proven performance data.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Optimize</h4>
                  <p className="text-gray-400">
                    Scripts are refined based on scoring results to maximize viral potential and authenticity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quality Assurance */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-300 font-medium">
                Every script tested against 500+ viral campaigns
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestingCriteria

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeatureCards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: '⚡',
      title: 'Viral Hooks',
      description: 'Based on 500+ scripts with 1M+ views each',
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: '🎬',
      title: 'Shot-by-Shot Guides',
      description: 'Production-ready filming instructions included',
      gradient: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      icon: '🎭',
      title: 'Delivery Notes',
      description: 'Natural hesitations and authentic tone cues',
      gradient: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
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
    <section className="section-padding bg-gradient-to-b from-gray-800 to-gray-900">
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
            What Makes Hookvault Different
          </motion.h2>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
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
                  relative glass rounded-2xl p-8 text-center h-full
                  transition-all duration-300 group-hover:shadow-2xl
                  ${feature.bgColor} ${feature.borderColor}
                  border-2 group-hover:border-opacity-40
                `}>
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                    bg-gradient-to-r ${feature.gradient}
                    transition-opacity duration-300
                  `} />

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                    bg-gradient-to-r ${feature.gradient}
                    blur-xl -z-10 transition-opacity duration-300
                  `} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                Built for UGC Creators & Brands
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-300">Platform-specific formatting (TikTok, Instagram, YouTube)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-300">Trained on real viral UGC data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">Multiple hook variations per brief</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-gray-300">Natural delivery cues and timing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-300">Production-ready shot lists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Brand voice customization</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureCards

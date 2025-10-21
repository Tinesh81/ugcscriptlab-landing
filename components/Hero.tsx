'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

const Hero = () => {
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-dark animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">⚗️</span>
            </div>
            <h1 className="text-4xl font-bold gradient-text">UGCScriptLab</h1>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 mb-8"
          >
            <span className="text-blue-400">⚗️</span>
            Tested on 500+ viral UGC campaigns
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            The Most Expensive Part of UGC Ads?{' '}
            <span className="gradient-text">
              Writing the Scripts.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            UGCScriptLab generates production-ready scripts in 2 minutes. Every hook tested against 500+ campaigns with 1M+ views. Complete with shot lists and delivery notes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Generate My First Script
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See Lab Results
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 mb-16"
          >
            No credit card • 10 free scripts • Lab-tested quality
          </motion.p>

          {/* Product Preview */}
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative max-w-4xl mx-auto"
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-gray-400">ugcscriptlab.co</span>
                
                {/* Lab Tested Badge */}
                <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-green-400 text-xs font-semibold">Lab Tested ✓</span>
                </div>
              </div>
              <div className="terminal-content">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-semibold">HOOK (tested):</span>
                    <span className="text-white">
                      "I spent $800 on retinol before discovering this..."
                    </span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">Performance:</span>
                    <span className="text-gray-300">
                      1.2M views, 8.3% CTR
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400 font-semibold">SHOT 1:</span>
                    <span className="text-gray-300">
                      Close-up product, bathroom counter (3 sec)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-semibold">DELIVERY:</span>
                    <span className="text-gray-300">
                      Pause after "$800" for emphasis
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const ComparisonTable = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      feature: 'Tested on real viral data',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    },
    {
      feature: 'Performance predictions',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    },
    {
      feature: 'UGC-specific training',
      chatgpt: false,
      otherTools: true,
      ugcscriptlab: true
    },
    {
      feature: 'Shot lists included',
      chatgpt: false,
      otherTools: true,
      ugcscriptlab: true
    },
    {
      feature: 'Delivery notes',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    },
    {
      feature: 'Lab-tested quality',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    },
    {
      feature: 'Scientific methodology',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    },
    {
      feature: '500+ campaign database',
      chatgpt: false,
      otherTools: false,
      ugcscriptlab: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
            Not Generic ChatGPT. Not Guesswork. Lab-Tested.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            See why brands choose UGCScriptLab over generic AI tools
          </motion.p>

          {/* Comparison Table */}
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-2xl overflow-hidden max-w-4xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-300">Feature</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <span className="text-gray-400">ChatGPT</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">Other Tools</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-lg">
                  <span className="text-white font-semibold">UGCScriptLab</span>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={rowVariants}
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-800/30 transition-colors duration-200 group"
                >
                  <div className="text-left flex items-center">
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.feature}
                    </span>
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    {item.chatgpt ? (
                      <CheckIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    {item.otherTools ? (
                      <CheckIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    {item.ugcscriptlab ? (
                      <CheckIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready to Upgrade Your UGC Scripts?
              </h3>
              <p className="text-gray-400 mb-6">
                Join 50+ brands who've switched from generic AI to UGCScriptLab's 
                lab-tested script generation.
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try UGCScriptLab Free
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable

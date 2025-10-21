'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const LabResults = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const labData = [
    {
      hookType: 'POV format',
      avgViews: '1.2M',
      engagementRate: '8.3%',
      useCases: 'Product reveals',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      hookType: 'Price shock',
      avgViews: '980K',
      engagementRate: '7.9%',
      useCases: 'Premium products',
      color: 'from-purple-500 to-pink-500'
    },
    {
      hookType: 'Before/After',
      avgViews: '1.5M',
      engagementRate: '9.1%',
      useCases: 'Transformations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      hookType: 'Problem/Solution',
      avgViews: '1.1M',
      engagementRate: '8.7%',
      useCases: 'Problem-solving',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      hookType: 'Secret reveal',
      avgViews: '1.3M',
      engagementRate: '8.9%',
      useCases: 'Exclusive tips',
      color: 'from-red-500 to-pink-500'
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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Lab Results
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Data-driven insights from 500+ viral UGC campaigns
          </motion.p>

          {/* Data Table */}
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-2xl overflow-hidden max-w-6xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-300">Hook Type</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-300">Avg. Views</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-300">Engagement Rate</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-300">Use Cases</h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {labData.map((data, index) => (
                <motion.div
                  key={index}
                  variants={rowVariants}
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-800/30 transition-colors duration-200 group"
                >
                  <div className="text-left flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${data.color} mr-3`} />
                    <span className="text-white group-hover:text-blue-400 transition-colors font-medium">
                      {data.hookType}
                    </span>
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">
                      {data.avgViews}
                    </span>
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">
                      {data.engagementRate}
                    </span>
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {data.useCases}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lab Methodology */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Our Research Methodology
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Data Collection</h4>
                      <p className="text-gray-400">
                        We analyze scripts from 500+ viral UGC campaigns with 1M+ views each, 
                        tracking performance metrics and engagement patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Pattern Analysis</h4>
                      <p className="text-gray-400">
                        Our AI identifies common elements, timing patterns, and language structures 
                        that consistently drive high engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Validation Testing</h4>
                      <p className="text-gray-400">
                        Each script variation is tested against our database to predict performance 
                        and provide confidence scores.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-400 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
                      <p className="text-gray-400">
                        Our models continuously learn from new viral content to stay ahead of 
                        trending patterns and platform changes.
                      </p>
                    </div>
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

export default LabResults

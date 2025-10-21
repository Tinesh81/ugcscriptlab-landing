'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: 1,
      icon: '📝',
      title: 'Enter Product Details',
      description: 'Name, benefits, target audience',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      number: 2,
      icon: '⚡',
      title: 'AI Generates Variations',
      description: '3 different viral hooks instantly',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      number: 3,
      icon: '📦',
      title: 'Get Complete Package',
      description: 'Script + shot list + delivery notes',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
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
            From Brief to Script in 3 Steps
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Get production-ready UGC scripts in minutes, not hours
          </motion.p>

          {/* Steps Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Step Card */}
                  <div className={`
                    relative glass rounded-2xl p-8 text-center h-full
                    transition-all duration-300 group-hover:shadow-2xl
                    ${step.bgColor} ${step.borderColor}
                    border-2 group-hover:border-opacity-40
                  `}>
                    {/* Step Number Badge */}
                    <div className={`
                      absolute -top-4 left-1/2 transform -translate-x-1/2
                      w-12 h-12 rounded-full bg-gradient-to-r ${step.color}
                      flex items-center justify-center text-white font-bold text-lg
                      shadow-lg group-hover:scale-110 transition-transform duration-300
                    `}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="text-6xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                      bg-gradient-to-r ${step.color}
                      transition-opacity duration-300
                    `} />

                    {/* Glow Effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                      bg-gradient-to-r ${step.color}
                      blur-xl -z-10 transition-opacity duration-300
                    `} />
                  </div>

                  {/* Mobile Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-current to-transparent opacity-30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Details */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
                What Happens Behind the Scenes
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">AI Analysis</h4>
                      <p className="text-gray-400">
                        Our AI analyzes your product details and identifies the most effective 
                        hook patterns for your target audience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Hook Generation</h4>
                      <p className="text-gray-400">
                        Generates 3 unique viral hooks based on proven patterns from 
                        high-performing UGC content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Script Assembly</h4>
                      <p className="text-gray-400">
                        Combines hooks with detailed shot lists, timing cues, and 
                        natural delivery notes for each platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-400 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Quality Check</h4>
                      <p className="text-gray-400">
                        Validates script authenticity, platform compliance, and 
                        brand voice alignment before delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Time Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-300 font-medium">
                Average generation time: <span className="text-green-400 font-bold">2 minutes</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

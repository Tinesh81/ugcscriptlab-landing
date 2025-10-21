'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const LabProcess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: 1,
      icon: '🔬',
      title: 'Analyze',
      description: 'We study 500+ viral scripts',
      details: 'Our AI analyzes patterns from successful UGC campaigns to identify what makes hooks go viral',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      number: 2,
      icon: '🧪',
      title: 'Test',
      description: 'AI generates variations based on proven patterns',
      details: 'Multiple script variations are created using data-driven insights from our viral script database',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      number: 3,
      icon: '✅',
      title: 'Validate',
      description: 'Output includes performance predictions',
      details: 'Each script comes with predicted performance metrics based on similar successful campaigns',
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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Lab Process
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Our scientific approach to UGC script generation
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
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.details}
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

          {/* Lab Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
                Lab Research Data
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-400">Viral Scripts Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
                  <div className="text-gray-400">Average Views per Hook</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">8.3%</div>
                  <div className="text-gray-400">Average CTR</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LabProcess

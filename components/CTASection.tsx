'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})

type EmailForm = z.infer<typeof emailSchema>

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema)
  })

  const onSubmit = async (data: EmailForm) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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

  const confettiVariants = {
    hidden: { opacity: 0, scale: 0 },
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
    <section className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
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
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to 10x Your{' '}
            <span className="gradient-text">UGC Output?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Join 50+ brands in early access and start generating production-ready 
            UGC scripts in minutes, not hours.
          </motion.p>

          {/* Email Capture Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Enter your email address"
                      className="input text-lg py-4 px-6 w-full"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 text-left"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Joining...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Get Early Access</span>
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  variants={confettiVariants}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckIcon className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    Welcome to UGCScriptLab!
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Check your inbox for early access details. We'll be in touch soon!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Limited spots available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Early adopter pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>No credit card required</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Join These Brands Already Using UGCScriptLab
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                {['Brand A', 'Brand B', 'Brand C', 'Brand D'].map((brand, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-gray-400 font-semibold">{brand}</span>
                    </div>
                    <p className="text-sm text-gray-500">Skincare Brand</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6 text-left">
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">How many scripts can I generate?</h4>
                <p className="text-gray-400">
                  Early access users get 10 free scripts to start. After that, you can upgrade 
                  to unlimited generation for $99/month.
                </p>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">What platforms are supported?</h4>
                <p className="text-gray-400">
                  We support TikTok, Instagram Reels, YouTube Shorts, and Facebook. Each script 
                  is optimized for the specific platform's format and audience.
                </p>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Can I customize the brand voice?</h4>
                <p className="text-gray-400">
                  Yes! You can specify your brand's tone, target audience, and key messaging. 
                  Our AI adapts the scripts to match your brand's unique voice.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Confetti Animation */}
      {isSubmitted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: 'easeOut'
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default CTASection

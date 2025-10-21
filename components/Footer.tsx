'use client'

import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">UGCScriptLab</h3>
              <p className="text-gray-400 text-lg">
                Scientific UGC Script Generation
              </p>
              <p className="text-gray-500">
                The AI-powered tool that generates production-ready UGC scripts 
                with viral hooks, shot lists, and delivery notes.
              </p>
            </motion.div>

            {/* Links Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <div className="space-y-2">
                <a 
                  href="#features" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a 
                  href="#examples" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Examples
                </a>
                <a 
                  href="#api" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  API
                </a>
              </div>
            </motion.div>

            {/* Social Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="https://twitter.com/hookvault" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
                <a 
                  href="mailto:hello@hookvault.ai" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/company/hookvault" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/hookvault" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-800"
          />

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <HeartIcon className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>for UGC creators</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a 
                href="#privacy" 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </motion.div>

          {/* Building in Public */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-300">Building in public</span>
              <span className="text-gray-500">🚀</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="text-center text-gray-500 text-sm"
          >
            © 2024 Hookvault. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

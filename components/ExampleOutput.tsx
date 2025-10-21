'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'

const ExampleOutput = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const scriptVariations = [
    {
      title: 'Hook A',
      hook: 'POV: You found the serum that actually works...',
      script: `HOOK: "POV: You found the serum that actually works..."

SCRIPT:
"I spent $800 on retinol serums before discovering this $12 bottle. My dermatologist was shocked when she saw my skin after just 2 weeks. 

[Apply serum to face]

This isn't your typical retinol. It's formulated with 0.5% retinol plus hyaluronic acid, so it doesn't irritate your skin like others do. I use it every night before bed, and wake up with skin that looks like I got 8 hours of sleep even when I didn't.

[Show before/after]

The best part? It's only $12. I used to spend $200+ on high-end serums that did nothing. This actually works. Link in bio if you want to try it."

SHOT LIST:
1. Close-up: Apply serum to face (3 sec)
2. Wide shot: Before/after skin comparison (4 sec)  
3. Medium shot: You talking to camera (8 sec)
4. Close-up: Serum bottle with brand name visible (2 sec)
5. Wide shot: You applying serum at night (3 sec)

DELIVERY NOTES:
- Start with genuine surprise/excitement
- Emphasize "$800" and "$12" with emphasis
- Pause after "actually works" for effect
- Show confidence when applying product
- End with strong call-to-action`,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Hook B', 
      hook: 'This $12 serum changed my skin in 2 weeks...',
      script: `HOOK: "This $12 serum changed my skin in 2 weeks..."

SCRIPT:
"Okay, I need to tell you about this serum that's literally changing my life. I've tried every expensive skincare product out there, but nothing worked like this $12 bottle.

[Show product]

I started using it 2 weeks ago, and my friends keep asking what I'm doing differently. My skin is so much smoother, and those dark spots I've had forever are finally fading.

[Apply to face]

It's got retinol, hyaluronic acid, and vitamin C all in one. I use it every night, and I wake up with this glow that I've never had before. And did I mention it's only $12? I used to spend $200+ on serums that did nothing.

[Show results]

If you're looking for a serum that actually works without breaking the bank, this is it. Link in bio!"

SHOT LIST:
1. Close-up: Product bottle (2 sec)
2. Medium shot: You talking excitedly (5 sec)
3. Close-up: Apply serum to face (3 sec)
4. Wide shot: Show skin results (4 sec)
5. Close-up: Product again with price emphasis (2 sec)

DELIVERY NOTES:
- Start with excitement and urgency
- Emphasize price contrast ($12 vs $200+)
- Show genuine surprise at results
- Use confident, enthusiastic tone
- Strong call-to-action at end`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hook C',
      hook: 'I spent $800 on retinol serums before this...',
      script: `HOOK: "I spent $800 on retinol serums before this..."

SCRIPT:
"Guys, I need to share something that's going to save you so much money. I've been on a skincare journey for years, trying every expensive retinol serum out there. I literally spent $800 on high-end products that did nothing.

[Show collection of expensive products]

Then I found this $12 serum, and honestly? It works better than all of them combined. My skin has never looked this good.

[Apply serum]

It's got 0.5% retinol plus hyaluronic acid, so it's gentle but effective. I use it every night, and the results are incredible. My dermatologist even asked what I was using.

[Show before/after]

The best part? It's only $12. I wish I had found this sooner. Link in bio if you want to try it!"

SHOT LIST:
1. Close-up: Expensive product collection (3 sec)
2. Medium shot: You talking to camera (6 sec)
3. Close-up: Apply $12 serum (3 sec)
4. Wide shot: Before/after comparison (4 sec)
5. Close-up: Product with price tag (2 sec)

DELIVERY NOTES:
- Start with relatable frustration about expensive products
- Show genuine surprise at $12 price
- Emphasize value and effectiveness
- Use confident, knowledgeable tone
- End with strong recommendation`,
      color: 'from-green-500 to-emerald-500'
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scriptVariations[activeTab].script)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
            See What You Get
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Interactive demo showing real script output with multiple hook variations
          </motion.p>

          {/* Code Editor Interface */}
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="terminal">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-gray-400">UGCScriptLab Output</span>
                
                {/* Copy Button */}
                <motion.button
                  onClick={handleCopy}
                  className="ml-auto flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <ClipboardDocumentIcon className="w-4 h-4" />
                      <span>Copy Script</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-700">
                {scriptVariations.map((variation, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      px-6 py-3 text-sm font-medium transition-all duration-200
                      ${activeTab === index
                        ? 'text-white border-b-2 border-purple-500 bg-gray-800/50'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }
                    `}
                  >
                    {variation.title}
                  </button>
                ))}
              </div>

              {/* Script Content */}
              <div className="terminal-content">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Hook */}
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold flex-shrink-0">HOOK:</span>
                    <span className="text-white text-lg font-medium">
                      {scriptVariations[activeTab].hook}
                    </span>
                  </div>

                  {/* Script Content */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-pink-400 font-semibold flex-shrink-0">SCRIPT:</span>
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {scriptVariations[activeTab].script.split('SCRIPT:')[1].split('SHOT LIST:')[0].trim()}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 font-semibold flex-shrink-0">SHOT LIST:</span>
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {scriptVariations[activeTab].script.split('SHOT LIST:')[1].split('DELIVERY NOTES:')[0].trim()}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green-400 font-semibold flex-shrink-0">DELIVERY NOTES:</span>
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {scriptVariations[activeTab].script.split('DELIVERY NOTES:')[1].trim()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Hooks</h3>
              <p className="text-gray-400">3 unique viral hooks per brief to test what resonates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-gray-400">Complete shot lists and timing for immediate filming</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Delivery</h3>
              <p className="text-gray-400">Authentic tone cues and delivery notes for each platform</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExampleOutput

import { AnimatePresence, motion } from 'framer-motion'
import { MouseEventHandler, useState } from 'react'

import Letter from '../assets/letter.png'
import FallingPetals from './FallingPetals'
import HeartModel from './HeartModel'
import ValentineMessage from './Message'

function Hero(params: {
  onClickHandler: MouseEventHandler<HTMLImageElement>
  isClicked: boolean
}) {
  const [showPetals, setShowPetals] = useState(false)
  const handleButtonClick = () => {
    setShowPetals(true)
  }

  return (
    <div
      className={` sm:container sm:mx-auto md:container md:mx-auto w-screen h-screen flex justify-center items-center bg-center relative`}
    >
      {showPetals && <FallingPetals onAnimationComplete />}
      <AnimatePresence mode="popLayout">
        {
          // if
          !params.isClicked ? (
            <motion.div
              key="closedEnvelope"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="box"
                animate={{
                  rotate: [0, 5, 0, -5, 0, 5, 0, -5, 0], // [0, 0, 180, 180, 0],
                }}
                transition={{
                  duration: 0.3,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                <motion.div
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <img
                    src={Letter}
                    className="w-96 h-auto cursor-rose"
                    onClick={params.onClickHandler}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            // or
            <motion.div
              key="openEnvelope"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <div className="fixed w-fit h-fit pt-9 top-0 left-0 right-0 -z-0">
                <HeartModel />
              </div>

              <div className="pt-20">
                <ValentineMessage />

                <div className="flex justify-around">
                  <motion.button
                    className="min-w-32 p-2 rounded-md  bg-red-800 text-center text-white hover:bg-rose-700 shadow-md"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    onClick={handleButtonClick}
                  >
                    Yes
                  </motion.button>
                  <motion.a
                    href="/"
                    className="min-w-32 p-2 rounded-md  bg-red-800 text-center text-white hover:bg-rose-700 shadow-md z-50"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    Back Home
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}
export default Hero

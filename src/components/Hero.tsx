import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { MouseEventHandler } from 'react'
import HeartModel from './HeartModel'

const Hero = (params: {
  onClickHandler: MouseEventHandler<SVGSVGElement> | undefined
  isClicked: boolean
}) => {
  return (
    <div className="flex justify-center items-center h-3/4 ">
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
                  rotate: [0, 5, 0, -5, 0, 5, 0, -5, 0] // [0, 0, 180, 180, 0],
                }}
                transition={{
                  duration: 0.3,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
              >
                <motion.div
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <EnvelopeIcon
                    className=" w-[34rem] h-5/6 text-pink-600 cursor-rose"
                    onClick={params.onClickHandler}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            // or
            <motion.div
              className="h-3/4"
              key="openEnvelope"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HeartModel />
              <div className="absolute left-0 right-0 bottom-1/4 text-center z-10 mb-10">
                <h1 className="font-display text-8xl capitalize text-white ">
                  will you be my valentine!!
                </h1>
              </div>
              {/* <EnvelopeOpenIcon className=" w-[34rem] h-5/6 text-pink-600 cursor-rose" /> */}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}
export default Hero

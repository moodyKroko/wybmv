import { motion } from 'framer-motion'

function ValentineMessage() {
  const message = 'Will you be my valentine!!'

  return (
    <div className="text-center font-display text-8xl text-wrap capitalize leading-snug text-pink-800 p-8 mt-9 -z-20">
      {message.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            delay: index * 0.13,
            duration: 0.7,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

export default ValentineMessage

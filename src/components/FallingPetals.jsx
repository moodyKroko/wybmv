import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function FallingPetals({ onAnimationComplete }) {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const numberOfPetals = 80 // Adjust as needed

    // Create petals
    const newPetals = Array.from({ length: numberOfPetals }, (_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: -10,
      rotation: Math.random() * 360,
      delay: Math.random() * 3,
      isComplete: false,
    }))
    setPetals(newPetals)
  }, [])

  const handleAnimationComplete = id => {
    setPetals(prevPetals =>
      prevPetals.map(petal =>
        petal.id === id ? { ...petal, isComplete: true } : petal
      )
    )
    onAnimationComplete(id)
  }

  return (
    <>
      {petals.map(
        petal =>
          !petal.isComplete && (
            <motion.div
              key={petal.id}
              style={{
                position: 'absolute',
                left: petal.x,
                top: petal.y,
                width: '20px',
                height: '20px',
                background:
                  'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.6) 100%)',
                clipPath:
                  'polygon(50% 0%, 100% 25%, 100% 100%, 50% 75%, 0% 100%, 0% 25%)', // Heart shape clip path
                transform: `rotate(${petal.rotation}deg)`,
                boxShadow: '0px 0px 5px rgba(255, 0, 0, 0.3)',
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: petal.rotation,
                transition: {
                  duration: Math.random() * 4 + 4, // Adjust animation speed as needed
                  ease: 'linear',
                  delay: petal.delay,
                },
              }}
              onAnimationComplete={() => handleAnimationComplete(petal.id)}
              className="w-2 h-2 rounded-full bg-red-500"
            />
          )
      )}
    </>
  )
}

export default FallingPetals

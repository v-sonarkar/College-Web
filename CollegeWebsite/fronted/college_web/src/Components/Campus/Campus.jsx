import React from 'react'
import { motion } from 'framer-motion'
import './Campus.css'

const Campus = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="campus"
      id="campus"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
<motion.div className="gallery" variants={itemVariants}>
    <img src="/src/assets/gallery-1.png" alt="gallery1" />
    <img src="/src/assets/gallery-2.png" alt="gallery2" />
    <img src="/src/assets/gallery-3.png" alt="gallery3" />
    <img src="/src/assets/gallery-4.png" alt="gallery4" />
</motion.div>

<motion.button className='btn dark-btn' variants={itemVariants}>See more here <img src="/src/assets/white-arrow.png" alt="arrow" /></motion.button>


    </motion.div>
  )
}

export default Campus
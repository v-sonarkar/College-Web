import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="hero container"
      id="hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div className="hero-text" variants={itemVariants}>
        <motion.h1 variants={itemVariants}>
          We Ensure better education for a better future
        </motion.h1>
        <motion.p variants={itemVariants}>
          Our college is dedicated to providing top-notch education and
          fostering a nurturing environment for students to thrive academically
          and personally. Join us to embark on a journey of knowledge, growth,
          and success.
        </motion.p>
        <motion.button className="btn" variants={itemVariants}>
          Explore More <img src="/src/assets/dark-arrow.png" alt="arrow" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

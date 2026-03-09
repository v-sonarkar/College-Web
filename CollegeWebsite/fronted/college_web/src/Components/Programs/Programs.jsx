import React from "react";
import { motion } from "framer-motion";
import "./Programs.css";

const Programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="programs"
      id="programs"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="program" variants={itemVariants}>
        <img src="/src/assets/program-1.png" alt="program1" />
        <div className="caption">
          <img src="/src/assets/program-icon-1.png" alt="arrow" />
          <p>Graduation Degree</p>
        </div>
      </motion.div>
      <motion.div className="program" variants={itemVariants}>
        <img src="/src/assets/program-2.png" alt="program2" />
        <div className="caption">
          <img src="/src/assets/program-icon-2.png" alt="arrow" />
          <p>Master's Degree</p>
        </div>
      </motion.div>

      <motion.div className="program" variants={itemVariants}>
        <img src="/src/assets/program-3.png" alt="program3" />
        <div className="caption">
          <img src="/src/assets/program-icon-3.png" alt="arrow" />
          <p>Research Programs</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Programs;

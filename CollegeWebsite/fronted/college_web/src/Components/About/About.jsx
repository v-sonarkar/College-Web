import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="about"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="about-left" variants={itemVariants}>
        <img src="/src/assets/about.png" alt="" className="about-img" />
        <img src="/src/assets/play-icon.png" alt="" className="play-icon" />
      </motion.div>
      <motion.div className="about-right" variants={itemVariants}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Learders Today</h2>
        <p>
          At our university, we are committed to fostering a dynamic learning
          environment that empowers students to excel in their academic pursuits
          and personal growth. With a diverse range of programs, experienced
          faculty, and state-of-the-art facilities, we provide the resources and
          support needed for students to thrive. Join us in our mission to
          cultivate knowledge, innovation, and leadership for a brighter future.
        </p>
        <p>
          Our campus is more than just a place of learning; it's a vibrant
          community where students from all walks of life come together to share
          ideas, collaborate on projects, and build lifelong friendships. We
          believe in the power of diversity and inclusivity, creating an
          atmosphere where every student feels valued and inspired to reach
          their full potential.
        </p>
        <p>
          Discover a world of opportunities at our university, where academic
          excellence meets real-world experience. From cutting-edge research
          initiatives to hands-on internships, we prepare our students to become
          leaders in their chosen fields. Join us and be part of a legacy of
          success and innovation.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;

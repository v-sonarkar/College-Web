import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c05995bf-99df-4f9e-b4f7-5f70d32d9ce7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className="contact"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="contact-col" variants={itemVariants}>
        <h3>Send us a message
            <img src="/src/assets/msg-icon.png" alt="msg-icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below.Your feedback ,questionsand suggestions are
          important to us as we strive to provide the best educational
          experience possible.
        </p>
        <ul>
            <li><img src="/src/assets/mail-icon.png" alt="email-icon" />Contact@UtkarshGupta.dev</li>
            <li><img src="/src/assets/phone-icon.png" alt="phone-icon" />+91 9876543210</li>
            <li><img src="/src/assets/location-icon.png" alt="location-icon" />77 Massachusetts Ave, Cambridge <br />MA 02139 ,United States</li>
        </ul>
      </motion.div>
      <motion.div className="contact-col" variants={itemVariants}>
        <form  onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Your email</label>
            <input type="email" name="email" placeholder="Enter your email"  required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
            <label>Write Your message here </label>
            <textarea name="message" placeholder="Type your message here" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src="/src/assets/white-arrow.png" alt="arrow" /></button>
            <span>
{result}
            </span>
        </form>
        
        
        
        
        
        </motion.div>
    </motion.div>
  );
};

export default Contact;

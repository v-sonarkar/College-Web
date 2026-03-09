import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      text: "This university transformed my life. The quality of education and mentorship I received here was exceptional.",
      user: "John Smith",
      img: "/src/assets/user-1.png"
    },
    {
      id: 2,
      text: "Outstanding faculty and amazing campus facilities. I made lifelong friendships and gained valuable skills.",
      user: "Sarah Johnson",
      img: "/src/assets/user-2.png"
    },
    {
      id: 3,
      text: "The support system here is incredible. They really care about student success and well-being.",
      user: "Michael Brown",
      img: "/src/assets/user-3.png"
    },
    {
      id: 4,
      text: "Best decision I made was coming here. The curriculum is relevant and career-focused.",
      user: "Emily Davis",
      img: "/src/assets/user-4.png"
    }
  ];

  return (
    <motion.div
      className="testimonials"
      id="testimonials"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        What Our Students Say
      </motion.h2>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="user-info">
                <img src={testimonial.img} alt={testimonial.user} />
                <h4>{testimonial.user}</h4>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Testimonials;

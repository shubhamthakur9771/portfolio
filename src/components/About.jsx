import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
      min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}


const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "",0.1,1)}
    className="mt-4 text-secondary text - [17px]
    max-w-3xl leading-[30px]"
    >
      I am a Junior Java Full-Stack Developer with strong fundamentals in Java, 
      JDBC, Spring Boot, Hibernate, and React.js. I enjoy building real-world, 
      scalable applications with clean architecture and secure backend systems.

      I have hands-on experience developing RESTful APIs, implementing role-based
       authentication using JWT, and designing responsive user interfaces. I have solved 200+ coding problems on platforms like LeetCode, strengthening my problem-solving and data structures knowledge.

      I am actively seeking an entry-level Java Developer or Full-Stack Developer 
      role where I can contribute, learn, and grow as a professional engineer.

    </motion.p>


    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index=
        {index} {...service}
        />
      ))

      }
    </div>
  </>
  ) 
}

export default SectionWrapper(About,"about");

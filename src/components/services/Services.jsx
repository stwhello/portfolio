import { motion } from "framer-motion";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";

const cardData = [
  {
    icon: "🚀",
    title: "5+ Industry Projects",
    description:
      "Delivered sleek, responsive websites with modern UI and dynamic features tailored to real-world clients.",
  },
  {
    icon: "💡",
    title: "Creative + Technical",
    description:
      "Skilled in React and full-stack development. Collaborate efficiently via Figma Dev Mode and build seamless backends using Node.js & MongoDB.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <div className='services'>
      <div className='sSection left'>
        <motion.h2
          className='aboutHeadline'
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Full Stack Developer
          <br />
          Crafting Impactful Web Experiences
        </motion.h2>

        <motion.div
          className='aboutCards'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardData.map((card, i) => (
            <motion.div className='aboutCard' key={i} variants={itemVariants}>
              <div className='cardIcon'>{card.icon}</div>
              <div className='cardContent'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='skillsGrid'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Python",
            "Django",
            "AWS",
            "Shopify",
            "Wordpress",
          ].map((skill, i) => (
            <motion.div className='skill' key={i} variants={itemVariants}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className='sSection right'>
        <motion.p
          className='aboutTagline'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Driven by curiosity. Defined by solutions.
        </motion.p>
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;

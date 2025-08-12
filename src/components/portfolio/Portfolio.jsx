import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "MAAC Website Redesign",
    desc: "Led the front-end development for a complete website redesign using the MERN stack. Crafted an engaging, animation-rich interface with advanced UI elements, and integrated it smoothly with the existing CMS to maintain content flow and enhance user experience.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Arena Animation Website Redesign",
    desc: "Led the front-end development of a fully responsive website redesign using the MERN stack. Delivered dynamic UI components and smooth animations, ensuring performance across multiple devices through precise breakpoint handling. Integrated the new design seamlessly with the existing CMS for consistent content delivery.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Paperfold Sequential Company Website",
    desc: "Designed and developed the front-end of the official company website using modern UI principles and animations with the MERN stack. Ensured responsiveness across all devices and implemented EmailJS to handle enquiry forms, enhancing lead capture and overall user interaction.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "WandFragrance eCommerce Website",
    desc: "Developed a fully functional eCommerce website using WordPress & WooCommerce. Integrated Razorpay for secure transactions and optimized performance, increasing customer engagement.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Vibhog Brand Website",
    desc: "Built and deployed a clean, responsive WordPress website for a rice and atta brand. Hosted on Hostinger, featuring optimized product display, contact forms, and brand-focused design to support credibility and customer trust.",
    link: "/",
  },
];



const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item, isMobile }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={isMobile ? {} : imgVariants}
        animate={isMobile ? {} : isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={isMobile ? {} : textVariants}
        animate={isMobile ? {} : isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={isMobile ? {} : textVariants}>{item.title}</motion.h1>
        <motion.p variants={isMobile ? {} : textVariants}>{item.desc}</motion.p>
        <motion.a variants={isMobile ? {} : textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const ref = useRef(null);

  // Recalculate distance + handle resize for mobile detection
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
      setIsMobile(window.innerWidth <= 480);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div
        className="pList"
        style={{ x: isMobile ? 0 : xTranslate }}
      >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} isMobile={isMobile} />
        ))}
      </motion.div>

      <section />
      <section />
      <section />
      <section />
      <section />

      {!isMobile && (
        <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#ddd"
              strokeWidth={20}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dd4c62"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

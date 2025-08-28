import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useScroll, useInView } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "MAAC Website Redesign",
    desc: "Led the front-end development for a complete website redesign using the MERN stack. Crafted an engaging, animation-rich interface with advanced UI elements, and integrated it smoothly with the existing CMS to maintain content flow and enhance user experience.",
    link: "https://www.maacindia.com/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Arena Animation Website Redesign",
    desc: "Led the front-end development of a fully responsive website redesign using the MERN stack. Delivered dynamic UI components and smooth animations, ensuring performance across multiple devices through precise breakpoint handling. Integrated the new design seamlessly with the existing CMS for consistent content delivery.",
    link: "https://www.arena-multimedia.com/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Paperfold Sequential Company Website",
    desc: "Designed and developed the front-end of the official company website using modern UI principles and animations with the MERN stack. Ensured responsiveness across all devices and implemented EmailJS to handle enquiry forms, enhancing lead capture and overall user interaction.",
    link: "https://paperfold.in/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "WandFragrance eCommerce Website",
    desc: "Developed a fully functional eCommerce website using WordPress & WooCommerce. Integrated Razorpay for secure transactions and optimized performance, increasing customer engagement.",
    link: "https://wandfragrance.com/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Vibhog Brand Website",
    desc: "Built and deployed a clean, responsive WordPress website for a rice and atta brand. Hosted on Hostinger, featuring optimized product display, contact forms, and brand-focused design to support credibility and customer trust.",
    link: "https://mdln.co.in/",
  },
];

const ListItem = ({ item }) => {
  return (
    <div className="pItem">
      <div className="pImg">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref }); // track horizontal scroll progress
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" }); // detect section visibility

  return (
    <div className="portfolio" ref={ref}>
      <div className="pList">
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </div>

      {isInView && (
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
              style={{ pathLength: scrollXProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

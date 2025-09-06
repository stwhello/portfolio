import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "./nport.css";

const items = [
  {
    id: 3,
    img: "/p3.jpg",
    title: "Paperfold Sequential Company Website",
    desc: "Designed and developed the front-end of the official company website using modern UI principles and animations with the MERN stack. Ensured responsiveness across all devices and implemented EmailJS to handle enquiry forms, enhancing lead capture and overall user interaction.",
    link: "https://paperfold.in/",
  },
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

const Nport = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const progress = useMotionValue(0);
  const circumference = 2 * Math.PI * 70;
  const dashOffset = useTransform(
    progress,
    (p) => circumference - circumference * p
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const ratio = scrollLeft / (scrollWidth - clientWidth);
      progress.set(ratio);
      if (scrollLeft > 20) setShowHint(false);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setShowHint(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section className='Nport' ref={sectionRef}>
      <AnimatePresence>
        {inView && (
          <motion.div
            className='pProgress'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <svg width='100%' height='100%' viewBox='0 0 160 160'>
              <circle
                cx='80'
                cy='80'
                r='70'
                fill='none'
                stroke='#ddd'
                strokeWidth={20}
              />
              <motion.circle
                cx='80'
                cy='80'
                r='70'
                fill='none'
                stroke='#dd4c62'
                strokeWidth={20}
                strokeDasharray={circumference}
                style={{ strokeDashoffset: dashOffset }}
                transform='rotate(-90 80 80)'
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='works' ref={ref}>
        {items.map((work) => (
          <div className='work' key={work.id}>
            <div className='left'>
              <img src={work.img} alt={work.title} />
            </div>
            <div className='right'>
              <div className='title'>{work.title}</div>
              <div className='desc'>{work.desc}</div>
              <a href={work.link} target='_blank' rel='noopener noreferrer'>
                <button>View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {inView && showHint && (
          <motion.div
            className='swipeHint'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            👉 Swipe Right
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Nport;

import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, lazy, Suspense } from "react";
import { motion, useInView } from "motion/react";

const ContactSvg = lazy(() => import("./ContactSvg"));

const listVariant = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => { setSuccess(true); setError(false); },
        () => { setError(true); setSuccess(false); }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });
  const isMobile = window.innerWidth <= 480;

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          {...(!isMobile && { variants: listVariant, animate: isInView ? "animate" : "initial" })}
        >
          <motion.h1 {...(!isMobile && { variants: listVariant })} className="cTitle">
            Let's keep in touch
          </motion.h1>

          <motion.div {...(!isMobile && { variants: listVariant })} className="formItem">
            <label htmlFor="from_name">Name</label>
            <input type="text" id="from_name" name="from_name" placeholder="John Doe" required />
          </motion.div>

          <motion.div {...(!isMobile && { variants: listVariant })} className="formItem">
            <label htmlFor="from_email">Email</label>
            <input type="email" id="from_email" name="from_email" placeholder="john@gmail.com" required />
          </motion.div>

          <motion.div {...(!isMobile && { variants: listVariant })} className="formItem">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} placeholder="Write your message..." required />
          </motion.div>

          <motion.button {...(!isMobile && { variants: listVariant })} className="formButton" type="submit">
            Send
          </motion.button>

          <span aria-live="polite" style={{ minHeight: "1.5em", display: "block" }}>
            {success && "Your message has been sent!"}
            {error && "Something went wrong!"}
          </span>
        </motion.form>
      </div>

      <div className="cSection">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactSvg />
        </Suspense>
      </div>
    </div>
  );
};

export default Contact;

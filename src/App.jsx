import { lazy, Suspense, useEffect } from "react";
import "./loader.css";
import "./index.css";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Nport = lazy(() => import("./components/nport/Nport"));
const Contact = lazy(() => import("./components/contact/Contact"));

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader"></div>
    <p>Loading...</p>
  </div>
);

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="nport">
          <Nport />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </Suspense>
  );
};

export default App;

import { lazy, Suspense, useEffect } from "react";
import "./loader.css";

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
    <div className="container">
      <Suspense fallback={<Loader />}>
        <section id="home" style={{ minHeight: "100vh" }}>
          <Hero />
        </section>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section id="services" style={{ minHeight: "100vh" }}>
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section id="nport" style={{ minHeight: "100vh" }}>
          <Nport />
        </section>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section id="contact" style={{ minHeight: "100vh" }}>
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;

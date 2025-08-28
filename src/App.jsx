import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}>
        <section id='home' style={{ minHeight: "100vh" }}>
          <Hero />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section id='services' style={{ minHeight: "100vh" }}>
          <Services />
        </section>
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <section id='portfolio' style={{ minHeight: "600vh" }}>
          <Portfolio />
        </section>
      </Suspense> */}

      <Suspense fallback={<div>Loading...</div>}>
        <section id='contact' style={{ minHeight: "100vh" }}>
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;

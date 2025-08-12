import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

// Lazy imports
const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

// Reusable Lazy Section
const LazySection = ({ children, height = "100vh" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView && children}
    </div>
  );
};

const App = () => {
  const isMobile = window.innerWidth <= 480;

  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazySection height="100vh">
          <section id="home">
            <Hero />
          </section>
        </LazySection>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazySection height="100vh">
          <section id="services">
            <Services />
          </section>
        </LazySection>
      </Suspense>

      {!isMobile && (
        <Suspense fallback={"loading..."}>
          <LazySection height="600vh">
            <section id="portfolio">
              <Portfolio />
            </section>
          </LazySection>
        </Suspense>
      )}

      <Suspense fallback={"loading..."}>
        <LazySection height="100vh">
          <section id="contact">
            <Contact />
          </section>
        </LazySection>
      </Suspense>
    </div>
  );
};

export default App;

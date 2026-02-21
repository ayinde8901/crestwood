import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// Public Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Loader from "./Components/Loader/Loader";
import ScrollToTopButton from "./Components/Scroll/ScrollToTopButton";

// Public Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Academics from "./Pages/Academics";
import Events from "./Pages/Events";
import Admissions from "./Pages/Admission";
import Teachers from "./Pages/Teachers";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/Notfound";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/academics"
          element={
            <>
              <Navbar />
              <Academics />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/admissions"
          element={
            <>
              <Navbar />
              <Admissions />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/teachers"
          element={
            <>
              <Navbar />
              <Teachers />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />
       <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomeContainer } from "./styles/index";
import { Hero, Navbar, Series, Trends, Movies, Collections, Pricing, FAQ, GoldenGlobe } from "./components";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionName = location.pathname.replace("/", "");
    if (sectionName) {
      const element = document.getElementById(sectionName);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <HomeContainer mode="dark">
      <Navbar />
      <Hero />
      <Trends />
      <Movies />
      <GoldenGlobe/>
      <Series />
      <Pricing />
      <Collections />
      <FAQ />
    </HomeContainer>
  );
};

export default App;
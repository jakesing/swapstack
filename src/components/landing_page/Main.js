import Hero from "./main/Hero";
import Brands from "./main/Brands";
import Writers from "./main/Writers";
import FrequentlyAskedQuestions from "./main/FrequentlyAskedQuestions";
import WallofLove from "./main/WallofLove";
import About from "./main/About";
import Newsletter from "./main/Newsletter";

function Main() {
  return (
    <div>
      <Hero />
      <Brands />
      <Writers />
      <About />
      <FrequentlyAskedQuestions />
      <WallofLove />
      <Newsletter />
    </div>
  );
}

export default Main;

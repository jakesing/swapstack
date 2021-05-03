import Hero from "./main/Hero";
import Brands from "./main/Brands";
import Writers from "./main/Writers";
import FrequentlyAskedQuestions from "./main/FrequentlyAskedQuestions";
import WallofLove from "./main/WallofLove";
import About from "./main/About";

function Main() {
  return (
    <div>
      <Hero />
      <Brands />
      <Writers />
      <About />
      <FrequentlyAskedQuestions />
      <WallofLove />
    </div>
  );
}

export default Main;

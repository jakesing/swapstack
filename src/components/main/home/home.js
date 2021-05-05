import Hero from "./Hero";
import Brands from "./Brands";
import Writers from "./Writers";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import WallofLove from "./WallofLove";
import About from "./About";
import Newsletter from "./Newsletter";

function Home() {
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

export default Home;

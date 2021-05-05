import Hero from "./Hero";
import Brands from "./Brands";
import Writers from "./Writers";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import WallofLove from "./WallofLove";
import About from "./About";
import Howitworks from "./Howitworks";
import Stats from "../../reusable/Stats";

let stats = [
  { description: "Active Newsletters", metric: "350+" },
  { description: "Active Brands", metric: "150+" },
  { description: "Creator Payouts", metric: "$40K+" },
];

function Home() {
  return (
    <div>
      <Hero />
      <Stats
        header="Thousands of matches made"
        subheader="We work with dozens of newsletters and brands daily"
        stats={stats}
      />
      <Howitworks />
      <Brands />
      <Writers />
      <About />
      <FrequentlyAskedQuestions />
      <WallofLove />
    </div>
  );
}

export default Home;

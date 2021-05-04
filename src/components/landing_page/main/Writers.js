import CalltoAction from "./writers/CalltoAction";
import Features from "./writers/Features";
import Testimonial from "./writers/Testimonial";
import Logocloud from "./writers/Logocloud";
import Stats from "./writers/Stats";

export default function Writers() {
  return (
    <div>
      <Features />
      <CalltoAction />
      <Stats />
      <Logocloud />
      <Testimonial />
    </div>
  );
}

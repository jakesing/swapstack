import CalltoAction from "./writers/CalltoAction";
import Features from "./writers/Features";
import Testimonial from "./writers/Testimonial";
import Logocloud from "./writers/Logocloud";

export default function Writers() {
  return (
    <div>
      <Features />
      <CalltoAction />
      <Logocloud />
      <Testimonial />
    </div>
  );
}

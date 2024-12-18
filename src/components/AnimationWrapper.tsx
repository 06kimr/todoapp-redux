import ScrollAnimation from "./ScrollAnimation";
import ScrollPinAnimation from "./ScrollPinAnimation";
import SimpleAnimation from "./SimpleAnimation";
import TimelineAnimation from "./TimelineAnimation";

export default function AnimationWrapper() {
  return  <div>
    <ScrollPinAnimation />
    <ScrollAnimation />
    <SimpleAnimation />
    <TimelineAnimation />
  </div>
}
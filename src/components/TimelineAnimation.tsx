import gsap from "gsap";
import { useRef } from "react";

export default function TimelineAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 200, duration: 1 });
    tl.to(boxRef.current, { y: 200, duration: 1 });
    tl.to(boxRef.current, { rotation: 360, duration: 1 });
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, backgroundColor: "violet" }}
      />
      <button onClick={animate}>Animate</button>
    </div>
  );
}

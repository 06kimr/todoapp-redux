import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 500,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,
        pin: true,
        markers: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill);
    };
  }, []);
  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "wheat" }} />
      <div
        ref={wrapperRef}
        style={{ height: "100vh", backgroundColor: "beige" }}
      >
        <div
          ref={boxRef}
          style={{ width: 100, height: 100, backgroundColor: "violet" }}
        />
      </div>
      <div style={{ height: "100vh" }} />
    </div>
  );
}

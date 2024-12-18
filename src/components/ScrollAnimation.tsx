import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 50%',
        end: 'bottom 30%',
        scrub: true,
        markers: true,
      }
    })
  }, [])
return(
  <div>
    <div style={{height: '100vh' }}/>
    <div ref={boxRef} style={{width: 100, height: 100, backgroundColor: 'violet'}}/>
    <div style={{height: '100vh' }}/>
  </div>
)
}
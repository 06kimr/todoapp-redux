import gsap from "gsap";
import { useRef } from "react"

export default function SimpleAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    gsap.to(boxRef.current, {x: 200, rotation: 360, duration: 1})
  }

  return (
    <div>
      <div ref={boxRef} style={{width: 100, height: 100, backgroundColor: 'violet'}}/>
      <button onClick={animate}>Animate</button>
    </div>
  )
}
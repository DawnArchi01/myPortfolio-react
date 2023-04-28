import './index.scss'
import LogoA from '../../../assets/images/logoA.svg'
import { useEffect, useRef } from 'react'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
// import { gsap } from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="A" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#0074D9', stopOpacity: 1 }}
            />

            <stop
              offset="100%"
              style={{ stopColor: '#FFC300', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            d="M10,90 L50,10 L90,90 L80,90 L50,30 L20,90 Z"
            fill="url(#grad1)"
            filter="url(#shadow)"
            ref={outlineLogoRef}
          />
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </g>
      </svg>
    </div>
  )
}

export default Logo

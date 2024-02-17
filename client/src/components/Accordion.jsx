import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useSpring, animated } from "react-spring";



function Accordion({ title, icon, openIcon, children, style, open, animation}) {
    const [isActive, setIsActive] = useState(open ? open : false);

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: icon ? "24px" : "18px" },
        to: { opacity: "1", maxHeight: isActive ? "1200px" : icon ? "24px" : "18px" },
        config: { duration: animation ? "300": "0" }
      });

      const iconAnimation = useSpring({
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: isActive ? "rotate(90deg)" : "rotate(0deg)"
        },
        config: { duration: animation ? "10": "0" }
      });

  return (
    <animated.div className={animation ? 'accordion-transition' :'accordion'} style={{...openAnimation, ...style}}>
        <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
            <animated.i style={iconAnimation}>
                <IoIosArrowForward />
            </animated.i>
            {isActive ? openIcon && openIcon :icon && icon}
            <span>{title}</span>
        </div>
            <div className='accordion-content'>
            {children}
            </div>
    </animated.div>
  )
}

export default Accordion
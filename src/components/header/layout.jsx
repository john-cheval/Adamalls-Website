"use client"
import React from 'react'
import gsap from 'gsap'
import HeaderOne from './header-one'
import HeaderTwo from './header-two'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderLayout = ({ data }) => {
  const path = usePathname()
  return (
    <div className={`${path === "/" ? '' : 'pb-4'} z-[99999] relative`}>
      {
        path === "/" ?
          <>
            <HeaderOne data={data} />
            <HeaderTwo data={data} slideFromTop />
          </>
          :
          <>
            <HeaderOne data={data} />
            <HeaderTwo data={data} />
          </>
      }
    </div>

  )
}

export default HeaderLayout
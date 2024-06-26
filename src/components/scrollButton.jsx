"use client"

import ScrollToTop from "react-scroll-up"
import { BsArrowUpCircle } from 'react-icons/bs'

const ScrollButton = () => {

  return (
    <div>
      <ScrollToTop showUnder={5}>
        <p className="text-5xl font-bold">
          <BsArrowUpCircle />
        </p>
      </ScrollToTop>
    </div>
  )
}

export default ScrollButton
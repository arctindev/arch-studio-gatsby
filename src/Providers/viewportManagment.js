import React, { useState, useEffect } from "react"

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
  scrollY: 0,
})

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const throttle = (handler, wait) => {
    let time = Date.now()
    return () => {
      if (time + wait - Date.now() < 0) {
        handler()
        time = Date.now()
      }
    }
  }

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("resize", throttle(handleWindowResize, 500))
    window.addEventListener("mousemove", throttle(handleWindowResize, 500))
    window.addEventListener("touchstart", throttle(handleWindowResize, 500))
    window.addEventListener("scroll", throttle(handleWindowResize, 500))
    return () => {
      window.removeEventListener("resize", throttle(handleWindowResize, 500))
      window.removeEventListener("mousemove", throttle(handleWindowResize, 500))
      window.removeEventListener(
        "touchstart",
        throttle(handleWindowResize, 500)
      )
      window.removeEventListener("scroll", throttle(handleWindowResize, 500))
    }
  }, [])
  return (
    <ViewportContext.Provider value={{ scrollY, width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider

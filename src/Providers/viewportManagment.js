import React, { useState, useEffect } from "react"

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
  scrollY: 0,
})

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [scrollY, setScrollY] = useState('')

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
    
    window.addEventListener("resize", throttle(handleWindowResize, 5))
    window.addEventListener("mousemove", throttle(handleWindowResize, 5))
    window.addEventListener("touchstart", throttle(handleWindowResize, 5))
    window.addEventListener("scroll", throttle(handleWindowResize, 5))
    return () => {
      window.removeEventListener("resize", throttle(handleWindowResize, 5))
      window.removeEventListener("mousemove", throttle(handleWindowResize, 5))
      window.removeEventListener(
        "touchstart",
        throttle(handleWindowResize, 5)
      )
      window.removeEventListener("scroll", throttle(handleWindowResize, 5))
    }
  }, [])
  return (
    <ViewportContext.Provider value={{handleWindowResize, scrollY, width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider;

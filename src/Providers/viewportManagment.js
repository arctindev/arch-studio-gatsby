import React, { useState, useEffect } from "react"

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
  scrollY: 0,
})

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [scrollY, setScrollY] = useState()

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    window.addEventListener("mousemove", handleWindowResize)
    window.addEventListener("touchstart", handleWindowResize)
    window.addEventListener("scroll", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
      window.removeEventListener("mousemove", handleWindowResize)
      window.removeEventListener("touchstart", handleWindowResize)
      window.removeEventListener("scroll", handleWindowResize)
    }
  }, [])
  return (
    <ViewportContext.Provider value={{ scrollY, width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider

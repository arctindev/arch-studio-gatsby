import React, { useState, useEffect } from "react"

export const ViewportContext = React.createContext({
  scrollY: 0,
})

export const ViewportProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState("")

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
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleWindowResize, 5))
    return () => {
      window.removeEventListener("scroll", throttle(handleWindowResize, 5))
    }
  }, [])
  return (
    <ViewportContext.Provider value={{ scrollY }}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider

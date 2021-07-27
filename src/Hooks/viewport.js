import React, { useState, useEffect, useContext } from "react"

const viewportContext = React.createContext({})

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("mouseover", handleWindowResize)
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("mouseover", handleWindowResize)
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = useContext(viewportContext)
  return { width, height }
}

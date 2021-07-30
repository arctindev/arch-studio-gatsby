import React, { useContext } from "react"
import { StyledMap, MapWrapper } from "./ContactMap.styles"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function ContactMap() {
  const { width } = useContext(ViewportContext)
  return (
    <MapWrapper width={width}>
      <StyledMap />
    </MapWrapper>
  )
}

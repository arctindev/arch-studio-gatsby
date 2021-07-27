import React from 'react'
import { StyledWhitespace } from './Whitespace.styles'
import { useViewport } from "../../Hooks/viewport";

export default function Whitespace() {
    const {height} = useViewport();
  if (height >720) {
    return (
        <StyledWhitespace />
    )} else {
        return null;
    }
}

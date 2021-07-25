import styled from "styled-components"

export const ItemWrapper = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`

export const MaskedImage = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 300px;
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  filter: contrast(125%) saturate(170%) grayscale(20%);
  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: linear-gradient(to top , black, transparent);
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

export const ItemTextWrapper = styled.div`
  padding: 2rem;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`

export const ItemTitle = styled.h3`
  z-index: 2;
  line-height: 25px;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 0.5rem;
`

export const ItemText = styled.p`
  z-index: 2;
  font-weight: normal;
  font-size: 15px;
`

import styled from "styled-components"

export const ItemWrapper = styled.div`
  height: 240px;
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
`

export const MaskedImage = styled.div`
  /* IT WORKS! Fallen in love with react ! */
  /* @keyframes colors{
    0%{
      filter: contrast(125%) saturate(170%) grayscale(20%);
    }50%{
      filter: contrast(125%) saturate(170%) grayscale(50%) hue-rotate(-60deg) brightness(80%);
    }100%{
      filter: contrast(125%) saturate(170%) grayscale(20%);
    }
  } */  
  z-index: -2;
  position: absolute;
  width: 100%;
  height: inherit;
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  filter: contrast(125%) saturate(170%) grayscale(20%);
  /* animation: ${({active}) => active ? 'colors' : 'none'} 5s ease-in-out; */
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
  color: ${({ theme }) => theme.colors.itemWithImageText};
`

export const ItemTitle = styled.h3`
  line-height: 25px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

export const ItemText = styled.p`
  font-weight: normal;
  font-size: 15px;
`

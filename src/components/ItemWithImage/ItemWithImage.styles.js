import styled from "styled-components"

export const ItemWrapper = styled.div`
  height: 240px;
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 1120px) {
    width: 32%;
    height: 560px;
  }

  &::after {
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 2vw;
    content: "${({ counter }) => (counter ? counter : null)}";
    font-size: 200px;
    color: white;
    opacity: 0.5;
    font-family: "Spartan";
    font-weight: bold;
    @media only screen and (min-width: 700px) {
      display: block;
    }
    @media only screen and (min-width: 1120px) {
      right: -1rem;
    }
  }
`

export const MaskedImage = styled.div`
  @keyframes colors {
    0% {
      filter: contrast(125%) saturate(170%) grayscale(20%);
    }
    50% {
      filter: contrast(125%) saturate(170%) grayscale(30%) hue-rotate(5deg)
        brightness(75%);
    }
    100% {
      filter: contrast(125%) saturate(170%) grayscale(20%);
    }
  }
  z-index: 1;
  position: absolute;
  width: 100%;
  height: inherit;
  filter: contrast(125%) saturate(170%) grayscale(20%);
  animation: ${({ active }) => (active ? "colors" : "none")} 0.9s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: linear-gradient(to top, black, transparent);
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  & > img {
    object-fit: cover;
    object-position: 50%;
    width: inherit;
    height: inherit;
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
  @media only screen and (min-width: 1180px) {
    width: 15rem;
  }
`

export const ItemTitle = styled.h3`
  z-index: 2;
  line-height: 25px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

export const ItemText = styled.p`
  z-index: 2;
  font-weight: normal;
  font-size: 15px;
`

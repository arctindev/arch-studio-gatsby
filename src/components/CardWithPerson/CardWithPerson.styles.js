import styled from "styled-components"
import pointer from "../../assets/icons/pointer.svg"

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.imageWithPersonBG};
  height: auto;
  padding-bottom: 2.5rem;
  @media only screen and (min-width: 700px) {
    width: 48%;
    padding-bottom: 4rem;
  }
`

export const PersonImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  margin-bottom: 1.5rem;
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  background-position: center;
  filter: contrast(110%) saturate(180%) grayscale(25%);
  & > img {
    z-index: 0;
    min-height: 300px;
    position: relative;
    object-fit: cover;
    width: inherit;
    height: inherit;
    transition: filter 0.3s ease-in-out;
  }
  @media only screen and (min-width: 1180px) {
    & > img {
      filter: ${({ active }) => (active ? "brightness(60%)" : "none")};
    }
  }
`
export const PersonIcons = styled.div`
  @keyframes showIcon {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: absolute;
  padding-top: 6px;
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 5.5rem;
  animation: showIcon 0.3s ease-in-out;
  @media only screen and (min-width: 1180px) {
    display: ${({ active }) => (active ? "flex" : "none")};
    top: calc(50% - 19px);
    left: calc(50% - 44px);
    & > svg path {
      fill: #ffffff;
    }
    & > svg {
      cursor: url(${pointer}) 8 2, auto;
    }
  }
`
export const PersonName = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.imageWithPersonName};
`

export const PersonJob = styled.p`
  color: ${({ theme }) => theme.colors.imageWithPersonJob};
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
`

export const Icons = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.5rem;
  cursor: url(${pointer}) 8 2, auto;
  @media only screen and (min-width: 1180px) {
    display: none;
  }
`

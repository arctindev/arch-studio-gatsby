import styled from "styled-components"
import { Link } from "gatsby"
import pointer from '../../assets/icons/pointer.svg'

export const RWDWrapper = styled.div`
position: relative;
  width: 100%;
  overflow: hidden;
  @media only screen and (min-width: 700px) {
    padding: 0 12.5vw 0 12.5vw;
  }
  &:before {
    z-index: 1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateX(-100%);
    @media only screen and (min-width: 700px) {
      transform: translateX(calc(12.5vw - 100%));
  }
  }
  &:after {
    z-index: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateX(100%);
    @media only screen and (min-width: 700px) {
    transform: translateX( calc(100% - 12.5vw))
  }
  }
`
export const StyledHero = styled.div`
  @keyframes appear {
      0%{
        opacity:0;
      }
      2%{
        opacity:0;
      }13%{
        opacity:1;
      }87%{
        opacity:1
      }
      98%{
        opacity:0;
      }
      100%{
        opacity:0;
      }
    }
    opacity:0;
    animation: appear 12s ease-in-out;
  position: relative;
  width: 100%;
  height: 560px;
  padding: 0vh 6.5vw 0 6.5vw;
  color: ${({ theme }) => theme.colors.heroFont};
  filter: contrast(125%) saturate(160%) brightness(115%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 6rem;
  @media only screen and (min-width: 700px) {
    height:720px;
  }
  @media only screen and (min-width: 1120px) {
    padding: 0 12.5vw 0 12.5vw;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: linear-gradient(to bottom right, black, rgb(25,25,25), rgb(50,50,50));
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

export const StyledImage = styled.img`
  z-index: -1;
  position: absolute;
  background: url(${({image}) => image}) no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width:100%;
  height:100%;
  top:0;
  left:0;
  overflow: hidden;
`;

export const StyledHeroWrapper = styled.div`
  z-index: 2;
  height: 340px;
  width: inherit;
  max-width: 400px;
`

export const StyledHeroTitle = styled.h2`
  z-index: 2;
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 1rem;
`

export const StyledHeroText = styled.p`
  z-index: 2;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 4rem;
`

export const StyledButton = styled.button`
  z-index: 2;
  border: none;
  height: 70px;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.buttonFont};
  background-color: ${({ theme }) => theme.colors.buttonBG};
  filter: brightness(1.25);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url(${pointer}) 8 2, auto;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBG};
    filter: brightness(0.9);
    opacity: 0.9;
  }
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerNavLink};
  text-decoration: none;
`
export const SliderNav = styled.div`
  z-index: 6;
  position:absolute;
  bottom:0;
  left:calc(12.5vw - 6.25vw);
  display:none;
  background-color: ${({theme}) => theme.colors.sliderNav};
  @media only screen and (min-width: 1120px) {
    display:flex;
  }
`;

export const SliderNavItem = styled.div`
  cursor: url(${pointer}) 8 2, auto;
  width:6.25vw;
  height:6.25vw;
  display:flex;
  justify-content: center;
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  letter-spacing: 0px;
  align-items: center;
  color: ${({theme,value,state}) => value===state ? theme.colors.sliderNavActiveFont : theme.colors.sliderNavFont};
  background-color: ${({theme,value,state}) => value===state ? theme.colors.sliderNavActiveItem : 'transparent'};
  &:hover{
    background-color: ${({theme,value,state}) => value===state ? theme.colors.sliderNavActiveItem : theme.colors.sliderNavHover};
  }
`;

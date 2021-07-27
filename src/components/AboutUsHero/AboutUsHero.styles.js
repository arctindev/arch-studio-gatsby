import styled from "styled-components";
import image from '../../assets/images/about/aboutHeroImage.jpg'

export const AboutUsHeroWrapper = styled.div`
  min-height: 700px;
  width:100%;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.aboutUsHeroBG};
`;

export const AboutUsImage = styled.div`
    position: relative;
    background: url(${image}) no-repeat;
    background-size: cover;
    width: 100%;
    height:240px;
    filter: contrast(110%) saturate(190%);
    &:before {
        z-index: 0;
        content:'';
        height:inherit;
        width: inherit;
        background-color: black;
        position: absolute;
        opacity:0.4;
        top:0;
        left:0;
    }
    &:after {
        z-index: 1;
        content:'';
        height:3rem;
        width: calc(100% - 6.5vw);
        background-color: ${({ theme }) => theme.colors.aboutUsHeroDecoration};
        position: absolute;
        bottom:0;
        left:0;
    }
`;
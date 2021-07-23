import styled from "styled-components";
import image from '../../assets/images/hero-image.jpg'

export const StyledHero = styled.div`
  width: 100%;
  height: 60vh;
  padding:0vh 4vh 0 3vh;
  color:white;
  background: url(${image}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const StyledHeroWrapper = styled.div`
  height: 35vh;
  width: inherit;
`;

export const StyledHeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom:1rem;
`;

export const StyledHeroText = styled.div`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 4rem;
`;

export const StyledHeroButton = styled.div`
  border:none;
  height:70px;
  width:250px;
  background-color: #1B1D23;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
  }
`;
import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  height:960px;
  width:100%;
  justify-content: center;
  align-items: center;
  padding: 0vh 7vw 0 7vw;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledTitle = styled.h2`
  color: #1B1D23;
  letter-spacing: -1.43px;
  line-height: 48px;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
`;

export const FeaturedItem = styled.div`
  height:240px;
  width: 100%;
  position: relative;
`;

export const FeaturedMaskedImage = styled.div`
  z-index: -2;
  position: absolute;
  width: 100%;
  height: inherit;
  color: white;
  background: url(${({image}) => {return image}}) no-repeat;
  background-size: cover;
  &:after {
  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to top, black, transparent);
  background-size: cover;
  top: 0;
  left: 0;
  opacity: 0.5;
  }
`;

export const ItemTextWrapper = styled.div`
  padding: 2rem;
  height:inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color:white;
`;

export const ItemTitle = styled.h3`
  line-height: 25px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

export const ItemText = styled.p`
  font-weight:normal;
  font-size: 15px;
`;

export const StyledButton = styled.button`
  border: none;
  height: 70px;
  width: inherit;
  color: white;
  background-color: #1b1d23;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
    margin-right: 1.5rem;
  }
`



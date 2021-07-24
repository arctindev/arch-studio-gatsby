import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  height:440px;
  width: inherit;
  &:before {
      z-index: -1;
      content:'';
      position: absolute;
      width:100%;
      height: ${() => {return 440-60}}px;
      background-color: #EEEFF4;
      bottom:0;
      left:0;
  }
`;

export const FooterContent = styled.div`
  height:inherit;
  width: inherit;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BrandingWrapper = styled.div`
  height:120px;
  width:120px;
  background-color: #1B1D23;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FooterList = styled.ul`
  width:inherit;
  height:140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ListItem = styled.li`
  color: #7D828F;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  border: none;
  height: 70px;
  width: 250px;
  color: white;
  background-color: #1b1d23;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
  }
`
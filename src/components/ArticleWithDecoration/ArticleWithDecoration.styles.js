import styled from "styled-components";

export const StyledWrapper = styled.main`
@keyframes ArticleAppear {
    0%{
        opacity: 0;
    }99%{
        opacity: 0;
    }100%{
        opacity: 1;
    }
}
  
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 0 6.5vw 0 6.5vw;
  margin-bottom: 7rem;
  animation: ArticleAppear 0.5s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 0;
    left: 6.5vw;
  }
`
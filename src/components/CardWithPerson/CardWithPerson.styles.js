import styled from "styled-components"

export const CardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.imageWithPersonBG};
  height: auto;
  padding-bottom: 2.5rem;
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
`

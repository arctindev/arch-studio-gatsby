import React from 'react'
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"
import { BrandingWrapper, FooterContent, FooterList, FooterWrapper, ListItem, StyledButton } from './Footer.styles'
import Branding from "../../assets/branding/branding-white.inline.svg"

export default function Footer() {
    return (
        <FooterWrapper>
            <div />
            <FooterContent>
                <BrandingWrapper>
                    <Branding />
                </BrandingWrapper>
                <FooterList>
                    <ListItem>Portfolio</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Contact</ListItem>
                </FooterList>
                <StyledButton>
                    <span>See Our Portfolio</span>
                    <ButtonArrow />
                </StyledButton>
            </FooterContent>
        </FooterWrapper>
    )
}

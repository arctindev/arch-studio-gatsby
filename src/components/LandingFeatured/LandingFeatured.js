import React from 'react'
import { FeaturedItem, FeaturedWrapper, StyledTitle, FeaturedMaskedImage, ItemTextWrapper, ItemTitle, ItemText, StyledButton } from './LandingFeatured.styles'
import firstImage from "../../assets/images/Featured01.jpg"
import secondImage from "../../assets/images/Featured02.jpg"
import thirdImage from "../../assets/images/Featured03.jpg"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

export default function LandingFeatured() {
    return (
        <FeaturedWrapper>
            <StyledTitle>Featured</StyledTitle>
            <FeaturedItem>
                <FeaturedMaskedImage image={firstImage} />
                <ItemTextWrapper>
                    <ItemTitle>Project Del Sol</ItemTitle>
                    <ItemText>View All Projects</ItemText>
                </ItemTextWrapper>
            </FeaturedItem>
            <FeaturedItem>
            <FeaturedMaskedImage image={secondImage} />
                <ItemTextWrapper>
                    <ItemTitle>228B Tower</ItemTitle>
                    <ItemText>View All Projects</ItemText>
                </ItemTextWrapper>
            </FeaturedItem>
            <FeaturedItem>
            <FeaturedMaskedImage image={thirdImage} />
                <ItemTextWrapper>
                    <ItemTitle>Le Prototype</ItemTitle>
                    <ItemText>View All Projects</ItemText>
                </ItemTextWrapper>
            </FeaturedItem>
            <StyledButton>
                <span>See All</span>
                <ButtonArrow />
                </StyledButton>
        </FeaturedWrapper>
    )
}

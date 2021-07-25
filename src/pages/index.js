import React, { useState , useEffect} from "react"
import MainTemplate from "../Template/MainTemplate"
import Hero from "../components/Hero/Hero"
import { StyledWhiteSpace } from "../components/LandingWhitespace/LandingWhitespace.styles"
import LandingArticle from "../components/LandingArticle/LandingArticle"
import LandingAboutUs from "../components/LandingAboutUs/LandingAboutUs"
import LandingFeatured from "../components/LandingFeatured/LandingFeatured"
import { LandingData } from "../Data/LandingData"

export default function Home() {
  const [scrollY,setScrollY] = useState(0);

    function handleScroll() {
        setScrollY(window.pageYOffset);
        console.log(scrollY)
      }
    

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", handleScroll);
          window.addEventListener("click", handleScroll);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("click", handleScroll);
        };
      });

  return (
    <MainTemplate>
      <Hero />
      <StyledWhiteSpace />
      {scrollY<2200 ? <LandingArticle />:null}
      <LandingAboutUs />
      <StyledWhiteSpace />
      {scrollY>2800 && scrollY<4800 ? <LandingFeatured data={LandingData[0]} />:null}
      <StyledWhiteSpace />
      {scrollY>4900 && scrollY<6600? <LandingFeatured data={LandingData[1]} />:null}
      <StyledWhiteSpace />
      {scrollY>6800 ? <LandingFeatured data={LandingData[2]} />:null}
      
    </MainTemplate>
  )
}

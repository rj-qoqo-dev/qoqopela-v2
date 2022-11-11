import React, {useState} from 'react'
import Video from '../../videos/video1.mp4'
import { ButtonS } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>MyQoqopela</HeroH1>
        <HeroP>
     <ul>
  <li>Enhance future and past partnerships</li>
  <li>Whether intimate, family or friendship we can help you find or better your connection</li>
  <li>Using the most modern concepts from science, psychology and mediation</li>
   <li>We integratethe best of traditional cultural practices.</li>
</ul>
        </HeroP>
        <HeroBtnWrapper>
          <ButtonS 
          to="signup"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true">
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

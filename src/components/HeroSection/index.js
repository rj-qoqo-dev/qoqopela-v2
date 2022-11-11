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
<div id="wrapper" class="left">
  <div id="content" class="left">
    <div id="listDiv" class="left">
      <ul>
        <li>Build and test relationships</li>
        <li>Eliminate the rough patches</li>
        <li>Reveal your inner ikigai</li>
        <li>Find your true partner</li>
      </ul>
    </div>
  </div>
</div>

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

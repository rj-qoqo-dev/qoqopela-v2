import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'
import Icon1 from '../../images/signup.svg'
import Icon2 from '../../images/signup.svg'
import Icon3 from '../../images/signup.svg'
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Heading</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Card1</ServicesH2>
          <ServicesP>lorem</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Card 2</ServicesH2>
          <ServicesP>lorem</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Card 3</ServicesH2>
          <ServicesP>lorem</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
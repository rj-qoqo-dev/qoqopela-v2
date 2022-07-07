import React from 'react'
import MultiStepForm from '../components/MultiStepForm'
import VerticalLinearStepper from '../components/Profile'
import { Container, FormContent, FormWrap, Icon, QoqoLogo } from '../components/Signin/SigninElements'


const ProfilePage = () => {
  return (
    <div>
      {/* <VerticalLinearStepper /> */}
      <Container>
        <FormWrap>
          <Icon to="/"><QoqoLogo src={process.env.PUBLIC_URL + '/QoqopelaLogo.png'}/>oqopela</Icon>
          <FormContent>
            <MultiStepForm />
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default ProfilePage
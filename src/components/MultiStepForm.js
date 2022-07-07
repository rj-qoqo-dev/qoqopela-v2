import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Stepper, Step, StepLabel, Typography, Button } from '@mui/material'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "6rem auto",
    border: "1px solid #999",
    background: "white",
    padding: "10px",
    "& .MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root Mui-active css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root":{
      color: "red"
    },
    "& .MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root Mui-completed css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root":{
      color: "red"
    }
  }
})

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  function getSteps(){
    return ["SIGN UP", "APPEARANCE", "CAPABILITIES"]
  }
  const handleNext = () => {
    setActiveStep(preActiveStep => preActiveStep + 1)
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch(stepIndex){
      case 0:
        return <StepOne/>
      case 1:
        return <StepTwo />
      case 2: 
        return <StepThree />
      default: return "unknown step"
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper  activeStep={activeStep} alternativeLabel>
        {steps.map(label1 => (
          <Step key={label1}>
            <StepLabel>
              {label1}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
      {activeStep === steps.length ? "Completed": (
        <>
        {getStepsContent(activeStep)}
      <Button onClick={handleNext}>
        {activeStep === steps.length ? "Finish" : "Next"}
      </Button>
      </>
      )}
      </>
    </div>
  )
}

export default MultiStepForm
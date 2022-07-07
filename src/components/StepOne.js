import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Grid, Checkbox, TextField, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton } from '@mui/material'
import IntlTelInput from 'react-intl-tel-input'
import "react-intl-tel-input/dist/main.css"
import { SendSharp, Visibility, VisibilityOff} from '@mui/icons-material'

const useStyles = makeStyles({
  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
    background: "white",
  },
  formContainer: {
    position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem",
  },
  inputField: {
    "&&": {
      width: "100%",
      marginBottom: "1rem",
    }
  },
  btn: {
    width: "100%",
    height: "3rem",
    background: "blue",
    color: "#fff",

    "&:hover": {
      background:"white",
    }
  }
})


const StepOne = () => {
  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false
  })
  const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false
  })
  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword
    })
  }
  const handleClickShowConfirmPasswordValue = () => {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
    })
  }
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{color: "#999", textAlign: "center"}}>
      Sign Up with Email
      </Typography>
      <div style={{position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem"}}>
      <form>
        <TextField
          className={classes.inputField}
          label="First Name"
          variant="outlined"
        />
        <TextField
          className={classes.inputField}
          label="Last Name"
          variant="outlined"
        />
        <IntlTelInput
          preferredCountries={["us"]}
        />
        <TextField
          className={classes.inputField}
          label="Email"
          variant="outlined"
        />
        <FormControl className={classes.inputField} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            label="Password"
            type={showPasswordValue.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment
              position="end">
                <IconButton
                edge="end"
                onClick={handleClickShowPassword} />
                {showPasswordValue.showPassword ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.inputField} variant="outlined">
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            label="Confirm Password"
            type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment
              position="end">
                <IconButton
                edge="end"
                onClick={handleClickShowConfirmPasswordValue} />
                {showConfirmPasswordValue.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            }
          />
        </FormControl>
        <>
            <Button
            className={classes.btn}
            variant='contained'
            type='submit'
            endIcon={<SendSharp />}>
              SIGN UP
            </Button>
        </>
      </form>
      </div>
    </div>
  )
}

export default StepOne
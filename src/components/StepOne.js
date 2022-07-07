import React, { useState } from 'react'
import useForm from './useForm'
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

  const stateSchema = {
    firstname: {value: "", error: ""},
    lastname: {value: "", error: ""},
    email: {value: "", error: ""},
    password: {value: "", error: ""},
    confirmPassword: {value: "", error: ""},
  }

  const stateValidatorSchema = {
    firstname: {
      required: true,
      validator: {
        func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
        error: 'First name must be more than 1 character'
      }
    },
    lastname: {
      required: true,
      validator: {
        func: value =>/^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
        error: 'Last name must exceed 3 characters'
      }
    },
    email: {
      required: true,
      validator: {
        func: value =>/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
        error: 'Email must follow valid format'
      }
    },
    password: {
      required: true,
      validator: {
        func: value =>/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
        error: 'Password must follow valid format'
      }
    },
  }

  const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

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

  const {firstname, lastname, email, password, confirmPassword} = values

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
          name='firstname'
          value={firstname}
          onChange={handleOnChange}
        />
        {errors.firstname && dirty.firstname && (
          <Typography
            style={{marginTop: "0", color: "red", fontWeight: "200"}}
          >{errors.firstname}</Typography>
        )}
        <TextField
          className={classes.inputField}
          label="Last Name"
          variant="outlined"
          name='lastname'
          value={lastname}
          onChange={handleOnChange}
        />
        {errors.lastname && dirty.lastname && (
          <Typography
            style={{marginTop: "0", color: "red", fontWeight: "200"}}
        >{errors.lastname}</Typography>
        )}
        <IntlTelInput
          preferredCountries={["us"]}
        />
        <TextField
          className={classes.inputField}
          label="Email"
          variant="outlined"
          name='email'
          value={email}
          onChange={handleOnChange}
        />
         {errors.email && dirty.email && (
          <Typography
            style={{marginTop: "0", color: "red", fontWeight: "200"}}
        >{errors.email}</Typography>
        )}
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
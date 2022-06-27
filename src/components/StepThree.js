import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Grid, Checkbox, TextField, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton } from '@mui/material'
import IntlTelInput from 'react-intl-tel-input'
import "react-intl-tel-input/dist/main.css"

const useStyles = makeStyles({
  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
  },
  formContainer: {
    position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem",
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
  },
})


const StepThree = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{color: "#999", textAlign: "center"}}>
      CAPABILITIES
      </Typography>
      <div style={{position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem"}}>
      <form>
        <TextField
          style={{width: "100%", marginBottom: "1rem"}}
          label="First Name"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="Last Name"
          variant="outlined"
        />
        <IntlTelInput
        style={{width: "100%", marginBottom: "1rem"}}
          preferredCountries={["am"]}
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="Email"
          variant="outlined"
        />
        <FormControl style={{width: "100%", marginBottom: "1rem"}} variant="outlines">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            labelWidth={70}
            endAdornment={
              <InputAdornment
              position="end">
                <IconButton
                edge="end" />
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      </div>
    </div>
  )
}

export default StepThree
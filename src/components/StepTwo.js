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


const StepTwo = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{color: "#999", textAlign: "center"}}>
      APPEARANCE
      </Typography>
      <div style={{position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem"}}>
      <form>
        <TextField
          style={{width: "100%", marginBottom: "1rem"}}
          label="Upload 30-60 second video of yourself"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="Upload five (5) photos of yourself"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="What is your height?"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="How energetic would you rate yourself?"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="How shy or aloof would you rate yourself?"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="How much are you noticed you when you walk into a room?"
          variant="outlined"
        />
        <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="How would you rate your “hotness”?"
          variant="outlined"
        />
        {/* <TextField
         style={{width: "100%", marginBottom: "1rem"}}
          label="How stylish or fashionable do you consider yourself?"
          variant="outlined"
        /> */}
      </form>
      </div>
    </div>
  )
}

export default StepTwo
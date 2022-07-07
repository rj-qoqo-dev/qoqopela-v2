import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Grid, Checkbox, TextField, Slider, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton } from '@mui/material'
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
        <Typography id="energy" gutterBottom>
        How energetic would you rate yourself?
      </Typography>
      <Slider
        aria-label="How energetic would you rate yourself?"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
      <Typography id="shy" gutterBottom>
        How shy/aloof would you rate yourself?
      </Typography>
      <Slider
        aria-label="How shy/aloof would you rate yourself?"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
       <Typography id="room" gutterBottom>
       How much are you noticed you when you walk into a room?
      </Typography>
      <Slider
        aria-label="How much are you noticed you when you walk into a room?"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
       <Typography id="hotness" gutterBottom>
       How would you rate your “hotness”?
      </Typography>
      <Slider
        aria-label="How would you rate your “hotness”?"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
       
      </form>
      </div>
    </div>
  )
}

export default StepTwo
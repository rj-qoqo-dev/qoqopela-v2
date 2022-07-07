import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Grid, Checkbox, TextField, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton, Slider } from '@mui/material'
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
      <Typography id="certified" gutterBottom>
        Rate your “publicly-certified” status:
      </Typography>
      <Slider
        aria-label="Rate your “publicly-certified” status"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
      <Typography id="accomplishments" gutterBottom>
      Rate your life accomplishments to date:
      </Typography>
      <Slider
        aria-label="Rate your life accomplishments to date"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
       <Typography id="ideas" gutterBottom>
       Rate your ability to think of game-changing ideas:
      </Typography>
      <Slider
        aria-label="Rate your ability to think of game-changing ideas"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
      <Typography id="talents" gutterBottom>
      Rate your natural mental or physical talents:
      </Typography>
      <Slider
        aria-label="Rate your natural mental or physical talents"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
      <Typography id="fitness" gutterBottom>
      Your physical fitness (aerobic)?:
      </Typography>
      <Slider
        aria-label="Your physical fitness (aerobic)?"
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
       <Typography id="fitness-2" gutterBottom>
      Your physical fitness (anaerobic)?:
      </Typography>
      <Slider
        aria-label="Your physical fitness (anaerobic)?"
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

export default StepThree
import * as React from "react"
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import TextField from '@material-ui/core/TextField'
import {useState} from "react"
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormControlLabel } from "@material-ui/core"
import { Radio } from "@material-ui/core"
import {FormControl} from "@material-ui/core"
import { FormLabel } from "@material-ui/core"
import { useHistory } from "react-router-dom"



const styleForm = {
  marginTop: 5,
  marginBottom: 5,
  display: 'block'
}


export default function Create() {
  
  // CONSTS
  const [naslov, setNaslov] = useState('')
  const [detalji, setDetalji] = useState('')

  const [naslovError, setNaslovError] = useState(false)
  const [detaljiError, setDetaljiError] = useState(false)

  const [category, setCategory] = useState('amar')
  const history = useHistory()

  const audio = new Audio('deveram.mp3');
  

  const handleSubmit = (e) => {
  e.preventDefault();
  
// reset errora forme kada se unese vrijednost
  setNaslovError(false)
  setDetaljiError(false)

// ako su prazne forme okida se bool true sto daje error
  if (naslov == '') {
    setNaslovError(true)
  }

  if (detalji == '') {
    setDetaljiError(true)
  }


  if ( naslov && detalji) {
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({naslov, detalji, category})
    }).then(() => history.push())
  }
   if (detalji.includes ('deveram')) {
    window.location.replace('https://youtu.be/MGULZRavanI?t=30')
  }


  }


  return (
    <Container>
  <Typography
  variant="h6"
  component="h2"
  color="textSecondary"
  gutterBottom
  >
      Kreiraj zadatak
  </Typography>

<form noValidate autoComplete="off" onSubmit={handleSubmit}>
  <TextField
  onChange={(e)=> setNaslov(e.target.value)}
  sx= {{...styleForm}}
  label="Naslov"
  color="secondary"
  fullWidth
  required
  error={naslovError}
  />
  <TextField
   onChange={(e)=> setDetalji(e.target.value)}
  sx= {{...styleForm}}
  label="Detalji"
  color="secondary"
  multiline
  rows={4}
  fullWidth
  required
  error={detaljiError}
  />
  <FormControl sx= {{...styleForm}}>
    <FormLabel>Kome se dodjeljuje </FormLabel>
     <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
     <FormControlLabel value='amar' control={<Radio />} label='Amar'/>
     <FormControlLabel value='edin' control={<Radio />} label='Edin'/>
     <FormControlLabel value='muamer' control={<Radio />} label='Muamer'/>
     <FormControlLabel value='keno' control={<Radio />} label='Keno'/>
   </RadioGroup>
  </FormControl>



<Button 
  /* className = {classes.btn} */
  /* sx={{...styleButton}} */
 /*  onClick={() => console.log('klikno si')} */
  type="submit"
  variant="contained"
  color="secondary" 
  endIcon={<KeyboardArrowRightIcon/>}
  >
    Kreiraj</Button>


</form>

    </Container>
  )
}



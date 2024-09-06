import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Name = () => {
  const [val,setCout] = useState()
  const submitHandler = () => {
    setCout("swathi")
  }
  const submitHandler1= () => {
    setCout("Nafiya")
  }
  const submitHandler2 = () => {
    setCout("Anagha")
    }

  return (
    <div>
      <br /><br /><br />
      <Typography variant ='h4'>Welcome {val}</Typography>
    <Button variant="contained" onClick={submitHandler}>swathi</Button>
    &nbsp;
    <Button variant="contained" onClick={submitHandler1}>Nafiya</Button>
    &nbsp;
    <Button variant="contained" onClick={submitHandler2}>Anagha</Button> 
    
    
    
    </div>
   )
}

export default Name
import  { Typography, Button }  from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var[value, setcounts] =useState(0)
  const add= () => {
  setcounts(++value)
  }

  const sub= () => {
    setcounts(--value);
    }


  return (
    <div>
        <br></br>
        <Typography  variant="h3" >Count:{value}</Typography> 
        <br></br> 
        <Button variant="contained" color="success" onClick={add}>+</Button> 
        &nbsp; &nbsp;
        <Button variant="contained" color="error" onClick={sub}>-</Button>
    </div>
  )
}

export default Counter
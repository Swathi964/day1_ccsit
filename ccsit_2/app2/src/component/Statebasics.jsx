import { Button , TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const Statebasics = () => {
    var[fname,setFname]=useState('Swathi')
    var[Cout, setCout] =useState()
    const handleInput=(a)=>{
      console.log(a.target.value)
        setFname(a.target.value)
    }
    const submitHandler =(a)=>{
    console.log("clicked");
    setCout(fname);
  }
  return (
    <div>
        <Typography variant='h2'>Welcome {Cout} </Typography>
        <TextField variant="filled" label='Enter name' onChange={handleInput}></TextField><br></br>
        <Button variant='contained' onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Statebasics
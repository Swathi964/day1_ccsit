import  { TableContainer, Table , TableHead , TableRow , TableBody ,TableCell }  from '@mui/material'
import  axios   from 'axios'
import React, { useState } from 'react'

const Api = () => {
  var[user, setUser] = useState([])
  axios.get("http://jsonplaceholder.typicode.com/users")
  .then((response)=>{
    console.log(response.data)
    setUser(response.data)
  }
)

  return (
    <div>
   
   <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>City</TableCell>
          </TableRow>
          </TableHead>
        <TableBody>
               {user.map((val)=> {
                    return(

            <TableRow>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.username}</TableCell>
              <TableCell>{val.address.city}</TableCell>
          </TableRow>

          )
        })}
        </TableBody>
    </Table>


   </TableContainer>
   </div>
  )
}

export default Api
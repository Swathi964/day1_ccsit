import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Pokemon = () => {
    var [poke, setPoke] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((res) => {  
            console.log(res.data);
            setPoke(res.data);
           
        })
    return (
        <div>
            <Grid container spacing={2}>
                {poke.map((val) => {
                        return (
                            <Grid>
                                <Card item sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={val.image_url}
                                        title="Pokemon img"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.pokemon}
                                        </Typography>
                                        <div>
                                            <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="p"
                                            sx={{color: "text.secondary"}}
                                            {val.type}
                                            </Typography>
                                        </div>

                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    })
                }


            </Grid>

        </div>
    )
}

export default Pockemon


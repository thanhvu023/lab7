import React, {useState, useEffect} from 'react'
import { Grid, Card, CardMedia, CardContent, Container,
        Typography, CardActions, Button } from '@mui/material';

const ListPlayers = () => {
    const [APIData, setAPIData]= useState([])
    const baseURL="https://6362c4a766f75177ea37bfca.mockapi.io/player";
  
    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(data => {
          setAPIData(data)
        })
        .catch(error => console.log(error.message))
    }, [])

  return (
    <Container>
    <Grid container spacing={2}> 
    {APIData.map((data)=>{
        return (
        <Grid item xs={4}>
           <Card>
                <CardMedia
                    component="img"
                    height="240"
                    image={data.img}
                    alt={data.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {data.club}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{data.nation}</Button>
                    <Button size="small">Detail</Button>
                </CardActions>
            </Card> 
        </Grid>
    )})}
    </Grid>
    </Container>
  )
}

export default ListPlayers
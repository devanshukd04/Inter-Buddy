import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import {Card,CardActions,CardContent,CardMedia,Box,Stack,Typography,Button,Grid,Item} from "@mui/material";
import Img from './images/companies.svg';
import home from './images/home.svg'
import Card1 from'./images/newInterview.svg';
import Card2 from './images/login.svg'
import Card3 from './images/newCompany.svg'
import {FadeTransform} from 'react-animation-components';
import "./App.css"
import Typed from 'typed.js'


function MediaCard(props) {
  return (
    <Card sx={{ maxWidth:300, backgroundColor: '#50545A', padding: '20px'}}>
      <CardMedia
        component="img"
        height="180"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <br></br>
        <Typography gutterBottom color="white" variant="h5" component="div" sx={{flexGrow:1,fontWeight:'bold'}} align='center'>
          {props.name}
        </Typography>
        {/* <Typography variant="body2" color="white">
          {props.description}
        </Typography> */}
      </CardContent>
    </Card>
  );
}

function App() {

  return (
    <div>

      <Navbar/>
      <div className="mainPage">

        <div className="grad">
            <div className="grad1">
                {/* <h1><span className="auto-input" ></span></h1> */}
                <br></br>
                <h2 className="headtxt">
                    Welcome to Interview Guide!
                    We are available to help you for all your Interview Related Queries through Interview Experiences of various companies.
                    You can also connect with us by following us on our Social Media handles.
                </h2>
            </div>
        </div>
        </div>

        <div>
        <img className="img" height="50px" src={home}/>
        </div>

    <Stack direction="row" spacing={5} m={10}>
      <Box sx={{width:'10%'}}></Box>
      <Grid container spacing={2} sx={{
            alignItems:"center",
            justifyContent:"center"
        }}>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard name="Get Yourself Interview Ready" img={Card1} description="Come join us. Here, you'll get to read interview experiences of the people who have clear the interview of the top MNC company"/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <MediaCard name="Company Related Information" img={Card2} description="Come join us. Here, you'll get to read interview experiences of the people who have clear the interview of the top MNC company"/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard name="Share Your Experience" img={Card3} description="Come join us. Here, you'll get to read interview experiences of the people who have clear the interview of the top MNC company"/>
      </Grid>
      </Grid>
      <Box sx={{width:'10%'}}></Box>
    </Stack>

      <Footer/>
      </div>
    
  )
}

export default App
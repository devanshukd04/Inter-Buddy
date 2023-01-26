import {Box,Stack,Container} from "@mui/material";
import {Typography,Grid} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import React from 'react'

function Footer() {
  return (
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#248FA8" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
    <Box sx={{
        width: '100%',
        // spacing:8,
        backgroundColor: '#4DA4BB',
        backgroundImage: 'linear-gradient(-45deg, #21A4C1 10%, #295F6F 40%)',
        display:"flex" ,
        alignItems:"center",
        justifyContent:"center"
    }}>
        <Container maxWidth="lg">
            <Stack sx={{
                width: '90%',
                m:4,
                spacing:8,
                // backgroundColor: '#4DA4BB',
                display:"flex" ,
                alignItems:"center",
                justifyContent:"center"
            }}>
            <Stack direction="row" spacing={2}>
        <Box
            sx={{
                width: '100%',
                spacing:8,
                // backgroundColor: '#0099ff',
                display:"flex" ,
                alignItems:"center",
                justifyContent:"center"
            }}
            >
            <Box sx={{width:'40%'}}></Box>
            <Grid container spacing={2} sx={{
                alignItems:"center",
                justifyContent:"center"
            }}>
        <Grid item xs={12} sm={3}>
            <Typography m={1}>
                <InstagramIcon size="large" edge="start" color='inherit' aria-label='logo'></InstagramIcon>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography m={1}>
                <FacebookIcon size="large" edge="start" color='inherit' aria-label='logo'></FacebookIcon>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography m={1}>
                <TwitterIcon size="large" edge="start" color='inherit' aria-label='logo'></TwitterIcon>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography m={1}>
                <LinkedInIcon size="large" edge="start" color='inherit' aria-label='logo'></LinkedInIcon>
            </Typography>
        </Grid>
        </Grid>
            <Box sx={{width:'40%'}}></Box>
            </Box>
        </Stack>
        
        <Typography >
        Copyright © 2022 All Rights Reserved by The Invaders.
            </Typography>
            </Stack>
        </Container>
    </Box>
   </>
  )
}

export default Footer
import {AppBar,Toolbar,IconButton, Typography,Stack,Button} from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {FadeTransform} from 'react-animation-components';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar=()=>{
    const user = localStorage.getItem('userInfo')

    const navigate = useNavigate()

    const logOut = async(e) => {
        localStorage.removeItem('userInfo')
        alert(`Logged Out successfully!`)
        setTimeout(function(){navigate('/')}, 2500)
    }

  return(
    <>
    <AppBar position="static" style={{ background: '#248FA8', backgroundImage: 'linear-gradient(-45deg, #21A4C1 10%, #295F6F 40%)'}}>
      <Toolbar>
        <Typography variant='h4' component='div' sx={{flexGrow:1}}>Interview Guide</Typography>
        <Stack direction="row" spacing={2}>
          <Button color='inherit'><Link color="white" style={{color: "white"}} className="nav-link" to={'/'}>
              About
            </Link></Button>
          {user?<></>:<Button color='inherit' onClick={function(){navigate('/login', {state:{page: 1}})}}>
            <Link style={{color: "white"}}  className="nav-link" to={'/login'}>
              Login
            </Link></Button>}
            {user?<></>:<Button color='inherit' >
          <Link style={{color: "white"}}  className="nav-link" to={'/signup'}>
            Sign-up
          </Link>
          </Button>}
          
          <Button color='inherit'>
          <Link style={{color: "white"}}  className="nav-link" to={'/companies'}>
            Companies
          </Link>
          </Button>
          {user?<Button color='inherit' onClick={logOut}>
          <Link style={{color: "white"}}  className="nav-link" to={'/'}>
            Log Out
          </Link>
          </Button>:<></>}
        </Stack>
      </Toolbar>
    </AppBar>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#248FA8" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
    </>
  );
}

export default Navbar;
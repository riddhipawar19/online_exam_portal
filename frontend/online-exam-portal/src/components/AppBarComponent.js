import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu'
import logo from '../logo.png'

function AppBarComponent() {

  const myStyle = {
    width: '55px'
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img style={myStyle} id="logo" src={logo}></img>
          <Typography style={{"margin-left": "15px"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EXAM_GROUND
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;

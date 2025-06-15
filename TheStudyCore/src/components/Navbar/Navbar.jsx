import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export default function MenuAppBar({ toggleMode, mode, isHome,setIsLoggedIn }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const navitem = [
    { lable: "Home", path: '/home', icon: HomeIcon },
    { lable: "About", path: "/about", icon: InfoIcon },
    { lable: "Courses", path: "/course", icon: LibraryBooksIcon },
  ]
  return (
    <Box sx={{ flexGrow: { md: 1, xs: 0, sm: 1 }, mb: { md: 5, xs: 4 } }}>
      <AppBar position="static" sx={{ backgroundColor: isHome ? 'transparent' : '#3241B8', color: 'navbarColor.primary', boxShadow: 'none', }}>
        <Toolbar sx={{ color: 'navbarColor.primary', p: 1 }}>
          <IconButton
            onClick={handleOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: { md: 2, sm: 0 }, }}
          >
            <MenuIcon />
          </IconButton>

          {openSidebar ? <Sidebar navitem={navitem} open={openSidebar} onClose={handleSidebarClose} setIsLoggedIn={setIsLoggedIn}/> : ""}
          <Box variant="h6" component="div" sx={{ flexGrow: 1, color: 'navbarColor.primary' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography sx={{ flexGrow: 1, color: 'navbarColor.primary', fontSize: '1.2rem', fontWeight: 600 }}>
                TheStudyCore
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' }, gap: 5, }}>

            {navitem.map((ele, index) => (
              < Link to={ele.path} style={{ textDecoration: 'none' }}>
                <Typography key={index} sx={{ cursor: 'pointer', fontWeight: 600, color: 'navbarColor.primary' }}>{ele.lable}</Typography>
              </Link>
            ))}
            <Link to={'/contact'} style={{ textDecoration: 'none' }}>
              <Typography sx={{ cursor: 'pointer', fontWeight: 600, color: 'navbarColor.primary' }}>Contact</Typography>
            </Link>
          </Box>


          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ color: 'navbarColor.primary' }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 5, }}
              >
                <Link to={"/profile"} style={{ textDecoration: "none", color: 'navbarColor.primary' }}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
              </Menu>
            </div>
          )}
          <Tooltip title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}>
            <IconButton onClick={toggleMode} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

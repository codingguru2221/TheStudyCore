import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotesIcon from '@mui/icons-material/Notes';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';




export default function Sidebar({ open, onClose, navitem, setIsLoggedIn }) {
    const navigate = useNavigate();

    const sidebaritem = [{ lable: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { lable: "Notes & Material", path: '/notes', icon: NotesIcon },
    // { lable: "Material", path: 'material' },
    { lable: "Downloads", path: '/download', icon: CloudDownloadIcon },
    { lable: "Progress Tracker", path: '/progress', icon: TrendingUpIcon },
    { lable: "Profile", path: '/profile', icon: PersonIcon }
    ]
    const DrawerList = (
        <Box sx={{
            width: 250,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }} role="presentation"
        // onClick={onClose}
        // onKeyDown={onClose}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", border: '1px solid black', m: 2, borderRadius: '5px' }} >
                <SearchIcon />
                <InputBase placeholder='search .....' />
            </Box>

            <List
                onClick={onClose}
                onKeyDown={onClose}
                sx={{ m: 0, p: 0 }}

            >
                {navitem.map((text, index) => (
                    <Link to={text.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: "text.primary" }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    {text.icon && <text.icon />}
                                </ListItemIcon>
                                <ListItemText primary={text.lable} sx={{ color: 'text.primary' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List
                onClick={onClose}
                onKeyDown={onClose}
                sx={{ m: 0, p: 0 }}
            >
                {sidebaritem.map((ele, index) => (
                    <Link to={ele.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: "text.primary" }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    {ele.icon && <ele.icon />}

                                </ListItemIcon>
                                <ListItemText primary={ele.lable} sx={{ color: 'text.primary' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Box sx={{ mt: 'auto', p: 2, display: 'flex', justifyContent: 'center' }}>


                <Button
                    onClick={() => {
                        localStorage.removeItem("user");
                        window.location.replace("/login");
                        localStorage.setItem("isLoggedIn", "false");
                        setIsLoggedIn(false);
                        toast.info("You have been logged out.");
                    }}
                    variant="contained"
                    sx={{
                        color: 'background.paper',
                        bgcolor: 'background',
                        height: '3rem',
                        borderRadius: '10px',
                        width: '10rem',
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                >
                    Logout
                </Button>



                {/* <Typography sx={{ cursor: 'pointer' }}></Typography> */}
            </Box>
        </Box >
    );

    return (
        <div>
            <Drawer open={open} onClose={onClose}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

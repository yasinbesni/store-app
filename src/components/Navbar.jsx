import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import { Link, NavLink } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';




const links = [
    { title: "Home", to: "/" },
    { title: "Products", to: "/products" },
];
const authLinks = [
    { title: "Login", to: "/login" },
    { title: "Register", to: "/register" },
]
export default function Navbar() { 

    return <AppBar position="static" sx={{backgroundColor:"secondary.light"}}>
        <Toolbar>
            <Box sx={{display:"flex",alignItems:"center", flexGrow:1}}>
                <IconButton color="inherit"
                       component={Link}
                        to='/home'
                        size='large'
                        edge="start">
                    <StoreIcon />
                </IconButton>
                {links.map(( link) => (
                    <Button 
                    key={link.title}
                    component={NavLink}
                    to={link.to}
                    color="inherit"
                    >
                        {link.title}
                    </Button>
                ))}
            </Box>
            <Box sx={{display:"flex",alignItems:"center",}}>
                <IconButton color="inherit"
                        component={Link}
                        to='/cart'
                        size='large'
                        edge="start">
                    <Badge badgeContent={'5'} color="secondary"                    
                    >
                        <LocalMallIcon />
                    </Badge>
                </IconButton>
                {authLinks.map(( link) => (
                    <Button 
                    key={link.title}
                    component={NavLink}
                    to={link.to}
                    color="inherit"
                    >
                        {link.title}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>;
}

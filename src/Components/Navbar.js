import {AppBar, Typography, Box, Toolbar,InputBase, Button, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { styled, alpha } from '@mui/material/styles';
import logo from "../Icons/logo.png"
import profileImage from "../Image/login-screen.jpg"
import useStyles from "../Styles"
import {Outlet} from "react-router-dom"

const Navbar = ()=>{
    const classes = useStyles();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: "0",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        },
        width: '100%',

      }));
      
    return(
        <div>            
            <AppBar position="relative">
                <Toolbar className={classes.navbar}>
                    <Box className={classes.navbarInner}>
                        <Box className={classes.navbarLogo}> 
                            <img src={logo} style={{height:"100%", width:"100%"}} alt="logo" />
                        </Box>
                        <Typography variant="h4">KeazoN<span className={classes.logoSubtitle}>Books</span></Typography>
                    </Box>
                    <Grid container maxWidth="sm" className={classes.searchContainer}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>
                        <Grid className={classes.searchButton} item xs={12} md={4} lg={4}>
                            <Button className={classes.button} variant="outlined">Search</Button>
                        </Grid>
                    </Grid>
                    <Box className={classes.navicons}>
                        <Box className={classes.navicon} mx={2}>
                            <LocalLibraryIcon />
                        </Box>
                        <Box className={classes.navicon} mx={2}>
                            <NotificationsIcon />
                        </Box>
                        <Box className={classes.navicon} mx={2}>
                            <ManageAccountsIcon />
                        </Box>
                        <Box className={classes.navProfile} marginLeft={1}>
                            <img src={profileImage} alt="profile" style={{height:"100%", width:"100%",borderRadius:"100%"}}/>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
}

export default Navbar;
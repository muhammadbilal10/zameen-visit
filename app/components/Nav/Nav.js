"use client";
import React from 'react';
import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
    useMediaQuery,
    List,
    ListItem,
    ListItemText,
    Paper,
} from '@mui/material';

// import Logo from '../../Assests/OctathornLogo.png';
// import CustomeButton from '../UI/Buttons/RounedButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClosIcon from '@mui/icons-material/Close';
// pl={{xl:'30%',lg:'25%',md:'10%'}}
const txtcolor = '#000000';
function Nav() {
    const isMobileView = useMediaQuery('(max-width: 480px)');
    const isTabletView = useMediaQuery('(max-width: 768px)');
    const mobileViewMinWidth = useMediaQuery('(min-width: 480px)');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const style = {
        ListItemText: {
            fontSize: '16px', fontWeight: '500', color: txtcolor,
            //on select change bg liitle light
            '&:hover': {
                color: '#0E4366',
                background: '#fff',
            },
        }
    }
    const list = (
        <List>
            {/* <Link to="/" style={{ textDecoration: 'none', color: textColor }}> */}
            <ListItem button>
                <ListItemText primary="Services" sx={style.ListItemText} />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Industries" sx={style.ListItemText} />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Technologies" sx={style.ListItemText} />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Portfolio" sx={style.ListItemText} />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Company" sx={style.ListItemText} />
            </ListItem>
            {/* <ListItem button sx={{marginTop:'8%'}}>
                <CustomeButton text="Contact Us" sx={style.ListItemText}/>
            </ListItem> */}
            {/* </Link> */}
        </List>
    )
    return (
        <div style={{ minWidth: '700px' }}>
            <AppBar sx={{ background: '#FFFFFF', boxShadow: 'none', padding: '15px', borderBottom: 'none',
          boxShadow:
          "0px -1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.01)", }}>

                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>

                    {/* <img src={"https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png"} width={isTabletView ? '134px' : ''} alt="Logo" style={{ marginLeft: isTabletView ? '0px' : '20px', }} /> */}


                    {!isMobileView && !isTabletView ? (
                        <>
                            {/* <div style={{ flexGrow: 1 }}></div> */}
                            <Box style={{ display: 'flex', marginRight: 'auto', }}>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/services" style={{ textDecoration: 'none', color: txtcolor }}>Home</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/industries" style={{ textDecoration: 'none', color: txtcolor }}>Buy</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/contact" style={{ textDecoration: 'none', color: txtcolor }}>Plot</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/portfolio" style={{ textDecoration: 'none', color: txtcolor }}>Rent</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 100px 0 15px', lg: '0 15px 0 25px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/Company" style={{ textDecoration: 'none', color: txtcolor }}>Company</a>
                                </Typography>

                            </Box >
                            {/* <div style={{marginRight:'3%'}}>
                            <CustomeButton text="Contact Us"  />
                            </div> */}
                            <img
                                src={"https://i.postimg.cc/nhKK59nL/Logo.png"}
                                width={isTabletView ? "75px" : ""}
                                height={isTabletView ? "75px" : ""}
                                alt="Logo"
                                style={{ marginLeft: isTabletView ? "0px" : "25px" }}
                            />
                               <Box style={{ display: 'flex', marginLeft: 'auto', }}>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/services" style={{ textDecoration: 'none', color: txtcolor }}>New Project</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/industries" style={{ textDecoration: 'none', color: txtcolor }}>Plot Finder</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/contact" style={{ textDecoration: 'none', color: txtcolor }}>Maps</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 15px', lg: '0 15px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/portfolio" style={{ textDecoration: 'none', color: txtcolor }}>Portfolio</a>
                                </Typography>
                                <Typography fontFamily={'Montserrat'} fontWeight={500} fontSize={{ sm: 11, md: 16, lg: 16, xl: 16, }} padding={{ xl: '0 100px 0 15px', lg: '0 15px 0 25px', md: '0 10px', sm: '0 10px' }}>
                                    <a href="/Company" style={{ textDecoration: 'none', color: txtcolor }}>More</a>
                                </Typography>

                            </Box >
                        </>
                    ) : (
                        <>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={toggleDrawer}
                                sx={{ marginLeft: 'auto', color: ' #172F49', display: { sm: 'block', md: 'none' }, zIndex: 9999 }}
                            >
                                {drawerOpen ? <ClosIcon /> : <MenuIcon />}
                            </IconButton>

                        </>
                    )
                    }

                    {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} sx={{width:'100%'}}>
                        {list}
                    </Drawer> */}

                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer}
                        variant="persistent"
                    >
                        <Paper style={{ width: '100%', height: 'calc(100% - 64px)', marginTop: '78px', position: 'fixed' }}>
                            {list}
                        </Paper>
                    </Drawer>
                </Toolbar>

            </AppBar>


        </div>
    );
}

export default Nav;

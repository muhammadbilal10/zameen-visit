"use client";
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const themeStyle = {
    searchBoxDesign: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // position: 'relative',
        // marginTop: 'auto',
        // marginBottom: 'auto', // Center the search box vertically
    },
    searchField: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {lg:'50%',md:'60%',sm:'80%',xs:'90%'},
        marginBottom: '1rem',
        backgroundColor: 'white',
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        right: '3%',
        transform: 'translateY(-50%)',
        fontSize: '2rem',
    },
    headingText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',

    },
};

function ImageCard({ imageUrl }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: 500,

            }}
        >

            <Box sx={themeStyle.searchBoxDesign}>

                <Typography fontFamily={'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif'} color={'white'} mt={20} ml={'auto'} mr={'auto'} variant="h1" fontSize={{lg:37,md:34,sm:25,xs:20}} fontWeight={700} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    Let's Search Properties for Sale in Pakistan
                </Typography>

                <Box sx={themeStyle.searchField}>
                    <SearchIcon sx={themeStyle.searchIcon} />
                    <TextField
                        variant="outlined"
                        label="Search"
                        fullWidth 
                         id="fullWidth"
                        size="large"
                        sx={{ width: '100%',   height: '68px',  '.MuiInputBase-input': { // Increase font size
                            fontSize: '25px',
                        }}}
                        autoComplete="on"
                    />
                </Box>

            </Box>

        </Box>
    );
}

export default ImageCard;

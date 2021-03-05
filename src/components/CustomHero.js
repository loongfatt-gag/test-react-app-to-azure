import React from 'react';
//import { Typography, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import herobackground from '../assets/images/herobackground01.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "10px"
    },
    herotext: {
        textDecoration: 'none',
        color: 'white',
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${herobackground})`,
        height: "300px",
        backgroundPosition: "Center",
        backgroundRepeat: "no-repeat",
        backgroundSizw: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    }
}));

function CustomHero() {
    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Box>Azure Static Web App</Box>
        </Box>
    );
}

export default CustomHero;
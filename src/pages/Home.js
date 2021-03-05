import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CustomHero from '../components/CustomHero';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "10px"
    },
    herotext: {
        textDecoration: 'none',
        color: 'primary',
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ height: '20vh' }}>
            <CustomHero />
            <div className={classes.root}>
                <Typography component="div" className={classes.herotext} variant="h3" align="center">
                     Home with changes for Second Test
                </Typography>  
            </div>
        </Container>
    )
}

export default Home;

import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "10px"
    },
    herotext: {
        textDecoration: 'none',
        color: 'primary',
    },
}));

function Reports() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ height: '20vh' }}>
            <div className={classes.root}>
                <Typography component="div" className={classes.herotext} variant="h3" align="center">
                    Reports
                </Typography>  
            </div>
        </Container>
    )
}

export default Reports;


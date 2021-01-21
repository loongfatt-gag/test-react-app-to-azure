import emailjs from 'emailjs-com';
import React from 'react';

import { Typography, Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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

function Contact() {

    const FORM_REACT_APP_EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const FORM_REACT_APP_EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const FORM_REACT_APP_EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(`${FORM_REACT_APP_EMAILJS_SERVICE_ID}`, `${FORM_REACT_APP_EMAILJS_TEMPLATE_ID}`, e.target, `${FORM_REACT_APP_EMAILJS_USER_ID}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ height: '20vh' }}>
            <div className={classes.root}>
                <Typography component="div" className={classes.herotext} variant="h3" align="center">
                    Contact
                </Typography>
                <form onSubmit={sendEmail}>
                    <TextField fullWidth label="Subject" name="subject" size="small" variant="outlined" />
                    <TextField fullWidth label="To Name" name="to_name" size="small" variant="outlined" />
                    <TextField fullWidth label="From Name" name="from_name" size="small" variant="outlined" />
                    <TextField fullWidth label="Message" name="message" size="small" variant="outlined" />
                    <Button color="secondary" fullWidth type="submit" variant="contained">
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Contact;

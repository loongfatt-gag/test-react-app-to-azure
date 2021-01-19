import React from 'react';

import { SidebarData } from './SidebarData';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },   
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function CustomDrawer() {
    const classes = useStyles();

    return (
        <List>
            {SidebarData.map((text) => (
                <React.Fragment key={text.id}>
                    <ListItem button key={text.id}>
                        <div key={text.id}>
                            <ListItem key={text.id}>
                                <ListItemIcon>{text.icon}</ListItemIcon>
                                <Link to={text.path} className={classes.link}><ListItemText primary={text.sidebarName} /></Link>
                            </ListItem>  
                        </div>
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    )
};

export default CustomDrawer;


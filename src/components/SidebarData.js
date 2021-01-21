import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export const SidebarData = [
    {
        id: 1,
        sidebarName: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        id: 2,
        sidebarName: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        id: 3,
        sidebarName: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        id: 4,
        sidebarName: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        id: 5,
        sidebarName: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpen />,
        cName: 'nav-text'
    },
    {
        id: 6,
        sidebarName: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        id: 7,
        sidebarName: 'Contact',
        path: '/contact',
        icon: <PermContactCalendarIcon />,
        cName: 'nav-text'
    },
]

/* eslint-disable no-undef */
import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  styled,
} from '@mui/material';
import { Breadcrumb } from '../../common/breadcrumb/Breadcrumb';
import { Userprofile } from '../../common/Userprofile/Userprofile';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#ffffff', // White header
  color: '#000000', // Black text
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header = ({ open, isMobile, handleDrawerOpen, currentRoute }) => {
  const getBreadcrumbs = () => {
    // Clean the route path
    const path = currentRoute.startsWith('/') ? currentRoute.substring(1) : currentRoute;
    switch (path) {
      case 'dashboard':
        return ['Dashboard'];
      case 'role-management':
        return ['Roles & Permissions'];
      case '':
        return ['Home']; 
      default:
        // For nested routes or custom handling
        const segments = path.split('/').filter(segment => segment);
        if (segments.length === 0) return ['Home'];
    }
  };

  return (
    <AppBar position="static" open={open}>
      <Toolbar >
        <Breadcrumb breadcrumbs={getBreadcrumbs()} />
       <Userprofile />
      </Toolbar>
    </AppBar>
  );
};
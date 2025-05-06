/* eslint-disable no-undef */
import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  styled,
} from '@mui/material';
import { Breadcrumb } from '../../common/breadcrumb/Breadcrumb';
import { Userprofile } from '../../common/Userprofile/Userprofile';
import { useLocation } from 'react-router-dom';
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#ffffff', 
  color: '#000000', 
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
  const location = useLocation();

  const getBreadcrumbs = () => {
    // Use breadcrumb from route state if available
    if (location.state?.breadcrumb) {
      return [location.state.breadcrumb];
    }

    const path = currentRoute.startsWith('/') ? currentRoute.substring(1) : currentRoute;
    const segments = path.split('/').filter(segment => segment);
    if (segments.length === 0) return ['Home'];

    return segments.map(segment =>
      segment.charAt(0).toUpperCase() + segment.slice(1)
    );
  };

  return (
    <AppBar position="static" open={open}>
      <Toolbar className='flex justify-between min-h-10'>
        <Breadcrumb breadcrumbs={getBreadcrumbs()} />
       <Userprofile />
      </Toolbar>
    </AppBar>
  );
};
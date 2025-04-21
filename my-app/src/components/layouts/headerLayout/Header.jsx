/* eslint-disable no-undef */
import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Breadcrumb } from '../../common/breadcrumb/Breadcrumb';

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
        
        // Format each segment for display (capitalize, replace hyphens with spaces)
        return segments.map(segment => 
          segment.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
    }
  };

  return (
    <AppBar position="static" open={open}>
      <Toolbar sx={{ height: '100%' }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Breadcrumb breadcrumbs={getBreadcrumbs()} />
        <IconButton sx={{ p: 1 }}>
          <AccountCircleIcon />
        </IconButton>
        <Typography variant="subtitle2" sx={{ mr: 1 }}>
          Wade Warren
        </Typography>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
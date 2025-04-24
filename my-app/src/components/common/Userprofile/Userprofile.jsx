import * as React from 'react';
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Userprofile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action) => {
    setAnchorEl(null);
    if (action === 'logout') {
      console.log('Logging out...');
    } else if (action === 'profile') {
      console.log('Go to profile...');
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar
        alt="Bharat Kashyap"
        src="https://avatars.githubusercontent.com/u/19550456"
        sx={{  mr: 1 }}
      />
      <Typography variant="body1"className='!text-sm !font-semibold text-[#4B5A5A]'>
      Wade Warren
      </Typography>
      <IconButton onClick={handleClick} size="small">
        <KeyboardArrowDownIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
   
      >
        <MenuItem onClick={() => handleClose('profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

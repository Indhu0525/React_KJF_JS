// src/common/breadcrumb/Breadcrumb.jsx
import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';

export const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs
    separator={<NavigateNextIcon fontSize="small" />}
    aria-label="breadcrumb"
    sx={{
      flexGrow: 1,
      fontWeight: 500,
      fontSize: '16px',
    }}
  >
    {breadcrumbs.map((crumb, index) => {
      const isLast = index === breadcrumbs.length - 1;
      const path = `/${crumb.toLowerCase().replace(/\s+/g, '-')}`;
  
      return isLast ? (
        <Typography key={index} color="text.primary">
          {crumb}
        </Typography>
      ) : (
        <Link
          key={index}
          component={RouterLink}
          to={path}
          underline="hover"
          color="inherit"
        >
          {crumb}
        </Link>
      );
    })}
  </Breadcrumbs>
  
  );
};
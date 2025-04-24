// src/common/breadcrumb/Breadcrumb.jsx
import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../../../styles/commoncss.scss';
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
 
  
      return isLast ? (
        <Typography className='breadcrumb !font-semibold !text-[1rem]' key={index} color="text.primary">
          {crumb}
        </Typography>
      ) : (
          {crumb}
      );
    })}
  </Breadcrumbs>
  
  );
};
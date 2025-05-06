
import React from 'react';
import '../../../styles/commoncss.scss';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { FaLessThan } from "react-icons/fa6";

const BREADCRUMB_CONFIG = {
  'permission': { showBack: true, parentPath: '/role-management' },
};

export const Breadcrumb = ({ breadcrumbs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(x => x);
  if (pathnames.length === 0) {
    return null;
  }
  const currentPage = pathnames[pathnames.length - 1];
  const pageConfig = BREADCRUMB_CONFIG[currentPage] || { showBack: false };
  const handleBackClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };
  if (pageConfig.showBack) {
    return (
      <Box 
        component={Link} 
        to={pageConfig.parentPath} 
        onClick={(e) => handleBackClick(e, pageConfig.parentPath)}  className='flex items-center'>
        <FaLessThan className='mr-1 text-sm text-[#303030] font-semibold' />
        <Typography 
      sx={{fontSize:'1rem',fontWeight:600,color:'#303030'}} >
          Back
        </Typography>
      </Box>
    );
  }
  
  return (
    <Typography 
  sx={{ fontSize: '1rem', fontWeight: 600, color: '#303030' }}
>
  {currentPage.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
</Typography>

  );
};
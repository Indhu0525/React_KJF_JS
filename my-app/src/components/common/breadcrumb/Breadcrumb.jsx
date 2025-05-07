import React from 'react';
import '../../../styles/commoncss.scss';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { FaLessThan } from 'react-icons/fa6';

// Utility: Convert camelCase or PascalCase to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const BREADCRUMB_CONFIG = {
  'permission': {
    showBack: true,
    parentPath: '/role-management',
    backText: 'Go to Role Management',
  },
  'material-total': {
    showBack: true,
    parentPath: '/Material-form',
    backText: 'Go to Material Details',
  },
  // Add more config entries here as needed
};

export const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split('/').filter(Boolean);
  if (pathnames.length === 0) return null;

  const currentPageRaw = pathnames[pathnames.length - 1];
  const currentPage = toKebabCase(currentPageRaw);

  const pageConfig = BREADCRUMB_CONFIG[currentPage] || { showBack: false };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(pageConfig.parentPath || '/');
  };

  return pageConfig.showBack ? (
    <Box
      component={Link}
      to={pageConfig.parentPath}
      onClick={handleBackClick}
      className="flex items-center"
    >
      <FaLessThan className="mr-1 text-sm text-[#303030] font-semibold" />
      <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#303030' }}>
        {pageConfig.backText || 'Back'}
      </Typography>
    </Box>
  ) : (
    <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#303030' }}>
      {currentPageRaw.replace(/[-_]/g, ' ').replace(/^\w/, c => c.toUpperCase())}
    </Typography>
  );
};

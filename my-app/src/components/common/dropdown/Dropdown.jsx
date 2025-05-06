import * as React from 'react';
import { MenuItem, FormControl, Select, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Dropdown = ({ label = 'Select', options = [], value, onChange }) => {
  return (
    <div className=''>
      <Typography
        sx={{
          fontSize: '0.75rem',
          color: '#303030',
          fontWeight: 700,
          mb: '0.5rem',
        }}
      >
        {label}
      </Typography>

      <FormControl
        sx={{
          width: '100%',
          borderRadius: '0.5rem',
          border: '1px solid #bdc4cd',
        }}
      >
    <Select
  value={value}
  onChange={onChange}
  displayEmpty
  IconComponent={KeyboardArrowDownIcon} // <-- custom icon
  inputProps={{ 'aria-label': label }}
  sx={{
    '& .MuiSelect-select': {
      padding: '8px 16px',
      fontSize: '0.75rem',
      color: value ? '#000' : 'gray',
    },
    '& fieldset': {
      border: 'none',
    },
  }}
>
  <MenuItem value="">Select</MenuItem>
  {options.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</Select>

      </FormControl>
    </div>
  );
};

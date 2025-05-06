import * as React from 'react';
import {
  FormControl,
  OutlinedInput,
} from '@mui/material';

export const Textfeild = ({ label, placeholder = '', className = '',value, onChange, type = 'text', name,  multiline = false, rows, }) => {
  return (
    <form noValidate autoComplete="off" className={`w-full ${className}`}>
    <FormControl sx={{ width: '100%' }}>
      <label className="text-xs mb-2 font-bold">{label}</label>
      <OutlinedInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        sx={{
          '& input': {
            fontSize: '0.75rem',
            padding: 0, // Let Tailwind handle padding
          },
          '& input::placeholder': {
            fontSize: '0.75rem',
          },
          '& textarea': {
            fontSize: '0.75rem',
            padding: 0,
          },
          '& textarea::placeholder': {
            fontSize: '0.75rem',
          },
        }}
        className={`!rounded-lg placeholder:text-xs px-4 py-3 border-[#BDC4CD] hover:border-[#BDC4CD] ${className}`}
      />
    </FormControl>
  </form>
  );
};

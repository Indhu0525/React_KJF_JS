import * as React from 'react';
import {
  FormControl,
  OutlinedInput,
} from '@mui/material';

export const Textfeild = ({ label, placeholder = '', value, onChange, type = 'text', name,  multiline = false, rows, }) => {
  return (
    <form noValidate autoComplete="off" className="!mt-7">
      <FormControl sx={{width:'100%'}} >
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
              padding: '8px 0px',
              fontSize: '0.75rem',
            },
            '& input::placeholder': {
              fontSize: '0.75rem',
            },
            '& textarea': {
                padding: '0px',
                fontSize: '0.75rem', 
              },
              '& textarea::placeholder': {
                fontSize: '0.75rem', 
              },
            
          }}
          className="!rounded-lg !placeholder:text-xs px-4 border-[#BDC4CD] hover:border-[#BDC4CD] "
        />
      </FormControl>
    </form>
  );
};

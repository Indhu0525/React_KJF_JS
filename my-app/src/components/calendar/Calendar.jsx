import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Typography } from '@mui/material';


export const Calendar = ({ label = "Date*", value, onChange, className = '',  placeholder = 'Select' }) => {
  return (
    <div className={`w-full ${className}`}>
      <FormControl sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 'bold', mb: 1 }}>
          {label}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={onChange}
            slotProps={{
              textField: {
                fullWidth: true,
                variant: 'outlined',
                InputProps: {
                  sx: {
                    borderRadius: '0.5rem',
                    height: '40px',
                    fontSize: '0.75rem',
                    '& input': {
                      padding: '8px 12px !important',
                      fontSize: '0.75rem',
                      height: 'auto',
                    },
                  },
                },
                inputProps: {
                    placeholder: placeholder,
                  style: {
                    padding: '8px 12px',
                    fontSize: '0.75rem',
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </FormControl>
    </div>
  );
};

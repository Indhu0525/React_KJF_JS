import * as React from 'react';
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
  } from '@mui/material';
  import { RiSearchLine } from "react-icons/ri";
export const Searchbox = () => {
  return (
    <form noValidate autoComplete="off">
      <FormControl className='!w-80 !h-full'>
        <OutlinedInput
          sx={{
            '& fieldset': {
              border: 'none', 
            },'& input': {
             padding:'8px 8px',
             fontSize: '0.75rem', 
            },
            '& input::placeholder': {
                fontSize: '0.75rem', 
               
              },
          }}
        className='bg-[#f2f2f2] !rounded-xl !placeholder:text-xs !h-full'
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <RiSearchLine />
            </InputAdornment>
          }
        />
    
      </FormControl>
    </form>
  )
}

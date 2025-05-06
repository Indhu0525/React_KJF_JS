import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, Box, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { styled } from '@mui/material/styles';

// Styled box for icons
const StyledBox = styled(Box)({
  width: 19,
  height: 19,
  border: '1px solid #D1D1D1',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Custom icon components
const UncheckedIcon = <StyledBox />;
const CheckedIcon = (bg = 'red') => (
  <StyledBox sx={{ backgroundColor: bg ,color:'red'}}>
    <CheckIcon style={{ fontSize: 14, color: 'white' }} />
  </StyledBox>
);
const IndeterminateIcon = (
  <StyledBox sx={{ backgroundColor: 'white', color: '#666666' }}>
    <IndeterminateCheckBoxIcon />
  </StyledBox>
);

export default function CustomizedCheckbox({ section, actions = [] }) {
  const [checked, setChecked] = React.useState(actions.map(() => false));

  const allChecked = checked.every(Boolean);
  const anyChecked = checked.some(Boolean);

  const handleParentChange = (e) => {
    setChecked(actions.map(() => e.target.checked));
  };

  const handleChildChange = (index) => (e) => {
    const newChecked = [...checked];
    newChecked[index] = e.target.checked;
    setChecked(newChecked);
  };

  const CustomCheckbox = (props) => (
    <Checkbox
      icon={UncheckedIcon}
      checkedIcon={CheckedIcon( '#1976d2')}
      indeterminateIcon={IndeterminateIcon}
      {...props}
    />
  );
  return (
    <Box sx={{ mb: 2 }}>
      <FormControlLabel
        label={<Typography sx={{color:'#303030',fontWeight:600,fontSize:'0.9rem'}}>{section}</Typography>}
        control={
          <CustomCheckbox
            checked={allChecked}
            indeterminate={!allChecked && anyChecked}
            onChange={handleParentChange}
          />
        }
      />
      {actions.length > 0 && (
        <Box sx={{ display: 'flex', ml: 3, gap: 15, }}>
          {actions.map((action, index) => (
            <FormControlLabel
              key={action}
              label={<Typography sx={{color:'#303030',fontWeight:500,fontSize:'0.9rem'}}>{action}</Typography>}
              control={
                <CustomCheckbox
                  checked={checked[index]}
                  onChange={handleChildChange(index)}
                />
              }
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

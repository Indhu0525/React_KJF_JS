// components/common/Switch.jsx

import React from "react";
import { Switch as MuiSwitch } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Switch component
const StyledSwitch = styled((props) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 40,
  height: 25,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    
  },
}));

export const Switchtoggle = (props) => {
  return <StyledSwitch {...props} />;
};

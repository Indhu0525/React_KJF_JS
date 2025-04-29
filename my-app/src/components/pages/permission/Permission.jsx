import React from "react";
import {
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import CustomizedCheckbox from "../../checkbox/Checkbox";

const permissionsData = [
  {
    section: "Dashboard"
  },
  {
    section: "Roles & Permissions",
    actions: ["Create", "Read", "Update", "Active/Deactivate"],
  },
  {
    section: "User Management",
    actions: ["Create", "Read", "Update", "Active/Deactivate"],
  },
  {
    section: "Material Inward",
    actions: ["Create", "Read", "Update", "Export"],
  },
  {
    section: "Material Issue to Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
  {
    section: "Material Issue to Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
  {
    section: "Material Issue to Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
];

export const Permission = () => {
  const [checked, setChecked] = React.useState({});

  // Handle individual child checkbox
  const handleChildChange = (section, action) => {
    const key = `${section}-${action}`;
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle parent checkbox
  const handleParentChange = (section, actions) => {
    const allChecked = actions.every(
      (action) => checked[`${section}-${action}`]
    );
    const newState = { ...checked };

    actions.forEach((action) => {
      newState[`${section}-${action}`] = !allChecked;
    });

    setChecked(newState);
  };

  return (
<Box
  sx={{
    maxHeight: "500px",
    overflowY: "auto",
  }}
  className="custom-scrollbar"
>
  <Typography className="!text-md !font-semibold text-[#303030] !pb-4">
    Add Permissions
  </Typography>

  {permissionsData?.map(({ section, actions = [] }) => {
    const allChecked = actions.every(
      (action) => checked[`${section}-${action}`]
    );
    const someChecked = actions.some(
      (action) => checked[`${section}-${action}`]
    );

    return (
      <Box
      key={section}
      sx={{
        display: "flex",
        flexDirection: "column", // Arrange items vertically
        mb: 2,
      }}
    >
     
      {/* Parent Checkbox (Section Title) below children */}
      <Box>
        <FormControlLabel
          label={section}
          control={
            <CustomizedCheckbox
              checked={allChecked}
              indeterminate={!allChecked && someChecked}
              onChange={() => handleParentChange(section, actions)}
            />
          }
          sx={{ fontWeight: "600", color: "#303030", m: 0, mt: 1 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 8,
          flexWrap: "nowrap",
        }}
      >
        {actions.map((action) => (
          <FormControlLabel
            sx={{
              m: 0,
              ".MuiFormControlLabel-label": {
              
              },
            }}
            key={`${section}-${action}`}
            label={action}
            control={
              <CustomizedCheckbox
                checked={checked[`${section}-${action}`] || false}
                onChange={() => handleChildChange(section, action)}
              />
            }
          />
        ))}
      </Box>
   
    </Box>
    );
  })}
</Box>
  );
};

import React from "react";
import { Box } from "@mui/material";
import CustomizedCheckbox from "../../checkbox/Checkbox";

const permissionsData = [
  { section: "Dashboard" },
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
  {
    section: "Material Issue to Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
  {
    section: " Issue to Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
  {
    section: " Production",
    actions: ["Create", "Read", "Update", "Export"],
  },
];

export const Permission = () => {
  return (
    <Box sx={{paddingBottom:'30px'}}>
      {permissionsData.map((item, index) => (
        <CustomizedCheckbox
 
        sx={{overflow:'auto'}}
          key={index}
          section={item.section}
          actions={item.actions || []}
        />
      ))}
    </Box>
  );
};

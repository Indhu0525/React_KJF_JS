
import React from "react";
import { Box } from "@mui/material";
import { Breadcrumb } from "../../common/breadcrumb/Breadcrumb";
import { Userprofile } from "../../common/Userprofile/Userprofile";
import { useLocation } from "react-router-dom";

export const Header = ({ open, currentRoute }) => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    if (location.state?.breadcrumb) {
      return [location.state.breadcrumb];
    }

    const path = (currentRoute || location.pathname || "").replace(/^\//, "");
    const segments = path.split("/").filter((segment) => segment);
    if (segments.length === 0) return ["Home"];

    return segments.map(
      (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
    );
  };

  return (
    <Box
      position="static"
      open={open}
      className="bg-[#ffffff] flex justify-between px-[24px] py-3 items-center">
      <Breadcrumb breadcrumbs={getBreadcrumbs()} />
      <Userprofile />
    </Box>
  );
};

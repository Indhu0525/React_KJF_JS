import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../sidebar/Sidebar";
import { Header } from "../headerLayout/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "#FFE150",
      }}>
      <Sidebar />
      {/* Main Layout Container */}
      <Box
        sx={{
          flexGrow: 1,
          display: "block",
          // flexDirection: 'column',
          overflow: "hidden",
          margin: "15px 15px 15px 0px",
          borderRadius: "25px",
          backgroundColor: "#ffffff",
        }}>
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "#ffffff",
            height: 'calc(100vh - 64px)',
            overflow: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
          className="custom-scrollbar">
          <Outlet sx={{ p: 0 }} />
        </Box>
      </Box>
    </Box>
  );
};

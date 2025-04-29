import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { CommonButton } from "../button/CommonButton";
import { FiPlus } from "react-icons/fi";
import Box from "@mui/material/Box";
import { Textfeild } from "../textfield/Textfeild";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "#00000033", // This is equivalent to #00000033
    backdropFilter: "blur(10px)",
  },
}));
export const CustomDialog = () => {
  const [role, setRole] = useState(""); //for textfeild-role
  const [Description, setDescription] = useState(""); //for textfeild-description
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment >
      <CommonButton
        onClick={handleClickOpen}
        icon={<FiPlus className="mr-1 !text-[#303030]" />}
        label="Add New"
        className="bg-[#FFE150] rounded-xl w-full !text-sm !text-[#303030] !font-semibold flex items-center justify-between px-8 py-3"
      />
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            width: "480px",
            maxWidth: "90%",
           
          },
        }}
      >
        <Box sx={{ p: 5, borderRadius: "20px" }}>
          <DialogTitle
            sx={{ m: 0 }}
            id="customized-dialog-title"
            className="!px-0 !py-1 !font-semibold !text-[1rem] !text-[#000000] "
          >
            Add New Role
          </DialogTitle>
          <div>
            <HighlightOffIcon
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: "44px",
                top: "40px",
                color: "primary",
              }}
              className="cursor-pointer"
            >
              <CloseIcon />
            </HighlightOffIcon>
            <Textfeild
              label="Role*"
              placeholder="Enter"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <Textfeild
              label="Description"
              placeholder="Enter"
              value={Description}
              rows={3}
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <CommonButton
            label="Add"
            className="bg-[#FFE150] justify-center mt-10 rounded-lg w-full !text-sm !text-[#303030] text-center !font-semibold flex items-center  px-8 py-3"
          />
        </Box>
      </BootstrapDialog>
    </React.Fragment>
  );
};

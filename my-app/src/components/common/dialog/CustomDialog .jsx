import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import { CommonButton } from "../button/CommonButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "#00000033",
    backdropFilter: "blur(10px)",
  },
}));

export const CustomDialog = ({
  dialogTitle = "Dialog",
  triggerLabel = "Open",
  triggerIcon = null,
  children,
  onSubmit,
  submitLabel = "Add",
  className,
  triggerClassName
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CommonButton
        onClick={handleClickOpen}
        icon={triggerIcon}
        label={triggerLabel}
        className={triggerClassName}
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
        <Box sx={{ p: 5, borderRadius: "20px"}}className="custom-scrollbar">
          <DialogTitle
            sx={{ m: 0 }}
            className="!px-0 !py-1 !font-semibold !text-[1rem] !text-[#000000]"
          >
            {dialogTitle}
          </DialogTitle>
          <HighlightOffIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "44px",
              top: "40px",
              cursor: "pointer",
            }}
          />
          {children}
          <CommonButton
            label={submitLabel}
            onClick={onSubmit}
            className={`bg-[#FFE150] justify-center mt-10 rounded-lg w-full !text-sm !text-[#303030] text-center !font-semibold flex items-center px-8 py-3 ${className}`}
          />
        </Box>
      </BootstrapDialog>
    </>
  );
};

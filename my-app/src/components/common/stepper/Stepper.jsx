import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Textfeild } from "../textfield/Textfeild";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import { Dropdown } from "../dropdown/Dropdown";
import { Calendar } from "../../calendar/Calendar";
import { Multiselectdropdown } from "../multiselect/Multiselectdropdown";
import { CommonButton } from "../button/CommonButton";
import { GoPlus } from "react-icons/go";


const steps = ["Vendor Details", "Material Details"];
const roles = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "employee", label: "Employee" },
]; //for dropdown

function CustomStepIcon(props) {
  const { icon } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#FFE150",
        color: "black",
        width: 30,
        height: 30,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      {icon}
    </Box>
  );
}

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null); //for calander
  return (
    <Box>
      <Box sx={{ width: "40%" }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{
            ".MuiStepLabel-root": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <div>
          <React.Fragment>
            <Typography>
              {activeStep === 0 && (
                <div className="flex flex-col justify-between min-h-[100%]">
                  <Grid container spacing={2} className="mt-3">
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-5">
                        <Dropdown
                          label="Vendor*"
                          value={role}
                          onChange={handleChange}
                          options={roles}
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-5">
                        <Textfeild
                          label="Vehicle number*"
                          placeholder="Enter Vehicle number"
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-3">
                        <Textfeild
                          label="Invoice number*"
                          placeholder="Enter Invoice number"
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-3">
                        <Calendar
                          label="Invoice Date"
                          value={startDate}
                          placeholder="Select"
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-3">
                        <Textfeild
                          label="Seal number*"
                          placeholder="Enter Seal number"
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <div className="mt-3">
                        <Textfeild
                          label="LR number*"
                          placeholder="Enter LR number"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <div className="flex justify-center">
                    <CommonButton
                      label="Add"
                      className="bg-[#FFE150] mt-8 rounded-lg w-full !text-sm !text-[#303030] !font-semibold flex items-center px-36 py-2"
                    />
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="flex flex-col justify-between min-h-[100%]">
                  <div>
                  <Grid
                    container
                    spacing={2}
                    className="mt-5 border border-[#BDC4CD] rounded-xl px-5 py-4"
                  >
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Dropdown
                          label="Material number*"
                          value={role}
                          onChange={handleChange}
                          options={roles}
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild
                          label="Material descriptions*"
                          placeholder="Enter "
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild label="UOM*" placeholder="Enter " />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild label="COA*" placeholder="Enter " />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Dropdown
                          label="Batch number*"
                          value={role}
                          onChange={handleChange}
                          options={roles}
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        {/* <Textfeild
                          label="Material descriptions*"
                          placeholder="Enter "
                        /> */}
                        <Multiselectdropdown />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild
                          label="Calculated Total*"
                          placeholder="$782.01 "
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild label="No. of pieces*" placeholder="3 " />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild
                          label="Invoice Quantity*"
                          placeholder="Enter "
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Textfeild
                          label="Receive Quantity*"
                          placeholder="Enter "
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Calendar
                          label="Invoice Date"
                          value={startDate}
                          onChange={(newValue) => setStartDate(newValue)}
                          placeholder="Select"
                        />
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <div>
                        <Dropdown
                          label="Material number*"
                          value={role}
                          onChange={handleChange}
                          options={roles}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  {/* <p className="flex justify-end text-[#015ED6] text-xs mt-2 semibold">+ Addmore</p> */}
                 <div className="flex justify-end">
                  <CommonButton
                   icon={<GoPlus className="ml-1" />}
                      label="Addmore"
                      className="bg-[#fff]  mt-3 !text-xs !text-[#015ED6]  flex items-center"
                    />
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <CommonButton
                      label="Back"
                      className="bg-[#fff] border border-[#DBDBDB] mt-8 rounded-lg w-full !text-sm !text-[#303030] !font-semibold flex items-center px-36 py-3"
                    />
                    <CommonButton
                      onClick={() => navigate('/Material-total')}
                      label="Next"
                      className="bg-[#FFE150] mt-8 rounded-lg w-full !text-sm !text-[#303030] !font-semibold flex items-center px-36 py-3"
                    />
                  </div>
                </div>
              )}
            </Typography>

            <Box sx={{ display: "flex", pt: 2 }}></Box>
          </React.Fragment>
        </div>
      </Box>
    </Box>
  );
}

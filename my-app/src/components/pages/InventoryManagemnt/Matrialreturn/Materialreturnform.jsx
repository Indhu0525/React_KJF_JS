import React, { useState } from "react";
import { Calendar } from "../../../calendar/Calendar";
import { Grid } from "@mui/material";
import { Dropdown } from "../../../common/dropdown/Dropdown";
import { Textfeild } from "../../../common/textfield/Textfeild";
import { Multiselectdropdown } from "../../../common/multiselect/Multiselectdropdown";
import { CommonButton } from "../../../common/button/CommonButton";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
export const Materialreturnform = () => {
  const [startDate, setStartDate] = useState(null); //for calander
  const roles = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
  ]; //f
  const [, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const [role, setRole] = useState("");
//   const [description, setDescription] = useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Grid container spacing={2} className="mt-3">
        <Grid size={{ xs: 12, md: 5 }}>
          <div>
            <Calendar
              label="Invoice Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              placeholder="Select"
            />
          </div>
        </Grid>
        </Grid>
        <div>
          <Grid
            container
            spacing={2}
            className="mt-5 border border-[#BDC4CD] rounded-xl px-5 py-4"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <div>
                <Dropdown
                  label="Material number*"
                  value={role}
                  onChange={handleChange}
                  options={roles}
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div>
                <Textfeild
                  label="Material descriptions*"
                  placeholder="Enter "
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
            <Grid size={{ xs: 12, md: 3 }}>
              <div>
               
                <Multiselectdropdown />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <div>
                <Textfeild label="Calculated Total*" placeholder="$782.01 " />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <div>
                <Textfeild label="No. of pieces*" placeholder="3 " />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <div>
                <Dropdown
                  label="Status*"
                  value={role}
                  onChange={handleChange}
                  options={roles}
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div>
                <Textfeild
                  label="Material descriptions*"
                  placeholder="Enter "
                />
              </div>
            </Grid>
            
          </Grid>

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
            onClick={() => navigate("/Material-total")}
            label="Add"
            className="bg-[#FFE150] mt-8 rounded-lg w-full !text-sm !text-[#303030] !font-semibold flex items-center px-36 py-3"
          />
        </div>
     
    </div>
  );
};

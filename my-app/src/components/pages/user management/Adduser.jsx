import React, { useState } from "react";
import { Textfeild } from "../../common/textfield/Textfeild";
import { FiPlus } from "react-icons/fi";
import { CustomDialog } from "../../common/dialog/CustomDialog ";
import { Dropdown } from "../../common/dropdown/Dropdown";
export const Adduser = () => {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Role:", role);
    console.log("Description:", description);
  };
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const roles = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
  ];
  return (
    <CustomDialog
      dialogTitle="Add New User"
      triggerLabel="Add New"
      triggerIcon={<FiPlus className="mr-1 !text-[#303030]" />}
      onSubmit={handleSubmit}
      triggerClassName="bg-[#FFE150] rounded-xl w-full !text-sm !text-[#303030] !font-semibold flex items-center justify-between px-8 py-3"
    >
      <div className="mt-3">
        <Textfeild sx={{ mt: 1 }} label="Name*" placeholder="Enter Name" />
      </div>
      <div className="mt-3">
        <Textfeild label="User name*" placeholder="Ex: Raja@123" />
      </div>
      <div className="mt-3">
        <Textfeild
          label="Password*"
          placeholder="Enter Password"
          type="password"
        />
      </div>
      <div className="mt-3">
        <Dropdown label="Role*" value={role} options={roles}     onChange={handleChange}/>
      </div>
    </CustomDialog>
  );
};

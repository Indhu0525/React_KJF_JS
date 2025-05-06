import React, { useState } from "react";
import { Textfeild } from "../../common/textfield/Textfeild";
import { FiPlus } from "react-icons/fi";
import { CustomDialog } from "../../common/dialog/CustomDialog ";

export const AddRole = () => {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Role:", role);
    console.log("Description:", description);
  };

  return (
    <CustomDialog
      dialogTitle="Add New Role"
      triggerLabel="Add New"
      triggerIcon={<FiPlus className="mr-1 !text-[#303030]" />}
      onSubmit={handleSubmit}
      triggerClassName="bg-[#FFE150] rounded-xl w-full !text-sm !text-[#303030] !font-semibold flex items-center justify-between px-8 py-3"
    >
      <div className="mt-5">
      <Textfeild
        label="Role*"
        placeholder="Enter"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      </div>
      <div className="mt-5">
      <Textfeild
        label="Description"
        placeholder="Enter"
        value={description}
        rows={3}
        multiline
        onChange={(e) => setDescription(e.target.value)}
         
      />
        </div>
    </CustomDialog>
  );
};

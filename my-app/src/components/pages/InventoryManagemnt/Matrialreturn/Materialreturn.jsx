import React from "react";
import { Searchbox } from "../../../common/searchbar/Searchbox";
import { FiPlus } from "react-icons/fi";
import { CommonButton } from "../../../common/button/CommonButton";
import { Materialreturntable } from "./Materialreturntable";
import { useNavigate } from 'react-router-dom';
export const Materialreturn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <Searchbox />
        <CommonButton
          icon={<FiPlus className="ml-1" />}
          label="Add New"
          onClick={(row) => navigate("/MaterialReturnForm") }
          iconPosition="left"
          className="bg-[#FFE150] rounded-xl px-5 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-1 "
        />
      </div>
      <Materialreturntable/>
    </div>
  );
};

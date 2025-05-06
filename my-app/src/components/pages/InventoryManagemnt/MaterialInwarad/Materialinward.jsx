import React from 'react'
import { Searchbox } from '../../../common/searchbar/Searchbox'
import { CommonButton } from '../../../common/button/CommonButton'
import { CiFilter } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { MatInwardTable } from './MatInwardTable';
export const Materialinward = () => {
   const navigate = useNavigate();
  return (
 <div className="h-100 overflow-hidden flex flex-col">
     <div className="flex justify-between items-center px-0 py-2">
        <div className='flex gap-2'>
        <Searchbox />
       <CommonButton
         icon={<CiFilter className="ml-1" />}
        label="Filter"
          iconPosition="right"
        className="bg-[#FFFFFF] rounded-xl px-8 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-2 border border-gray-100"/> 
        </div>
        <CommonButton
         icon={<FiPlus className="ml-1" />}
        label="Add New"
        iconPosition="left"
        onClick={(row) => navigate("/Material-form") }
        className=" rounded-xl px-5 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-2 "/> 
      
     </div>
     <div className="flex-1 overflow-auto px-0 pb-4">
<MatInwardTable />
     </div>
   </div>
  )
}

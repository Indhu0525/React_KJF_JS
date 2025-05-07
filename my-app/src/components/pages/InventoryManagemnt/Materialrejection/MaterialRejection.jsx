import React from 'react'
import { Searchbox } from '../../../common/searchbar/Searchbox'
import { CommonButton } from '../../../common/button/CommonButton'
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReusableTable from '../../../common/table/Table';

const roleColumns = [
  { id: "CreatedDateTime", label: "Created Date & Time", width: 200 },
  { id: "DocumentID", label: "Document ID", width: 140},
  { id: "ReturnDate", label: "Return Date", width: 140},
  { id: "Createdby", label: "Created by", width: 140},
  { id: "Action", label: "Actions", width: 140 },
];

const roleData = [
  {
    CreatedDateTime:"22/05/2022 3.45 pm",
    DocumentID:"001",
    ReturnDate:"19-2-25",
    Createdby:"Dushyanth",
    },
    {
      CreatedDateTime:"22/05/2022 3.45 pm",
    DocumentID:"001",
    ReturnDate:"19-2-25",
    Createdby:"Dushyanth",
    },
    {
      CreatedDateTime:"22/05/2022 3.45 pm",
      DocumentID:"001",
      ReturnDate:"19-2-25",
      Createdby:"Dushyanth",
      },
      {
        CreatedDateTime:"22/05/2022 3.45 pm",
      DocumentID:"001",
      ReturnDate:"19-2-25",
      Createdby:"Dushyanth",
      },
      {
        CreatedDateTime:"22/05/2022 3.45 pm",
        DocumentID:"001",
        ReturnDate:"19-2-25",
        Createdby:"Dushyanth",
        },
        {
          CreatedDateTime:"22/05/2022 3.45 pm",
        DocumentID:"001",
        ReturnDate:"19-2-25",
        Createdby:"Dushyanth",
        },

];
export const MaterialRejection = () => {
     const navigate = useNavigate();
  return (
    <div>
      <div className='flex justify-between'>
     <Searchbox/>
      <CommonButton
              icon={<FiPlus className="ml-1" />}
             label="Add New"
             iconPosition="left"
             onClick={(row) => navigate("/Material-form") }
             className="bg-[#FFE150] rounded-xl px-5 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-2 "/> 
           
      </div>
      <ReusableTable 
            columns={roleColumns}
            data={roleData}
            onAssignClick={(row) => navigate("/permission")}
          renderCustomActions={(row, idx) => (
                 <div className="flex items-center gap-2">
                   <BiEditAlt
                     onClick={() => console.log("Edit", row)}
                     className="text-[1.8rem] cursor-pointer text-gray-600 border border-gray-300 rounded-lg w-10 h-8  px-3 py-2"
                   />
                   <RiDeleteBin5Line
                     onClick={() => console.log("Delete", row)}
                     className="text-[1.9rem] cursor-pointer text-red-600 border border-gray-300 rounded-lg w-10 h-8  px-3 py-2"
                   />
                 </div>
               )}
          />
    </div>
  )
}

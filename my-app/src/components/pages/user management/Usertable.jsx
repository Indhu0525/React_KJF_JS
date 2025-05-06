import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableTable from '../../common/table/Table';
import { Switchtoggle } from '../../common/switchbuton/Switch';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbLockShare } from "react-icons/tb";
const roleColumns = [
    { id: "UserID", label: "User ID" },
    { id: "Name", label: "Name"},
    { id: "UserName", label: "User Name"},
    { id: "Role", label: "Role"},
    { id: "Status", label: "Status"},
    { id: "Action", label: "Actions" },
  ];
  
  const roleData = [
    {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },

      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },

      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },

      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
      {
        UserID:"1234",
        Name:"Dushyanth",
        UserName:"Dushyanth@gmail.com",
        Role: "Inward Executive",
      },
];
export const Usertable = () => {
    const navigate = useNavigate();

  const handleToggle = (row) => {
    console.log("Toggled", row);
  };
    
      
  return (
    <ReusableTable 
         columns={roleColumns}
         data={roleData}
         onAssignClick={(row) => navigate("/permission")}
         onToggle={handleToggle}
      
         onEdit={(row) => console.log("Edit", row)}
         onDelete={(row) => console.log("Delete", row)}
      renderCustomCell={(columnId, value, row, index) => {
        if (columnId === "Status") {
          return <Switchtoggle onChange={() => handleToggle(row)} />;
        }
        
        return undefined;
      }}
       renderCustomActions={(row, idx) => (
              <div className="flex items-center gap-2">
               <TbLockShare
                  onClick={() => console.log("Delete", row)}
                  className="text-[1.9rem] px-3 py-2 cursor-pointer text-gray-600 border border-gray-300 rounded-lg w-10 h-8"
                />
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
  )
}

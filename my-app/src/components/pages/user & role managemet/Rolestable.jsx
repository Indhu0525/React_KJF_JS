import React from 'react';
import ReusableTable from '../../common/table/Table';
import { useNavigate } from 'react-router-dom';
import { Switchtoggle } from '../../common/switchbuton/Switch';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
const roleColumns = [
    { id: "Role", label: "Role", width: 140 },
    { id: "Description", label: "Description", width: 550 },
    { id: "Action", label: "Action", width: 90 },
    { id: "Permission", label: "Permission", width: 90 },
  ];
  
  const roleData = [
    {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Senior Manager",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Sales Manager",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "United States",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Inward Manager",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Executive",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "HOD",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Production Manager",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Mexico",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
      {
        Role: "Admin",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.",
      },
];
export const Rolestable = () => {
    const navigate = useNavigate();

  
  return (
    <ReusableTable
      columns={roleColumns}
      data={roleData}
      onAssignClick={(row) => navigate("/permission")}
      renderCustomActions={(row, idx) => (
        <div className="flex items-center gap-2">
          <Switchtoggle />
          <BiEditAlt
            onClick={() => console.log("Edit", row)}
            className="text-[1.8rem] cursor-pointer text-gray-600 border border-gray-300 rounded-lg w-10 h-8  px-3 py-2"
          />
          <RiDeleteBin5Line
            onClick={() => console.log("Delete", row)}
            className="text-[1.9rem] cursor-pointer text-red-600 border border-gray-300 rounded-lg  w-10 h-8  px-3 py-2"
          />
        </div>
      )}
    />
  )
}

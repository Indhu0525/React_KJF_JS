import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReusableTable from '../../../common/table/Table';


const roleColumns = [
    { id: "DateTime", label: "Created Date & Time", width: 200 },
    { id: "DocumentID", label: "Document ID", width: 140},
    { id: "Createdby", label: "Created by", width: 140},
    { id: "InvoiceNo.", label: "Invoice No.", width: 140},
    { id: "InvoiceDate", label: "Invoice Date", width: 140},
    { id: "Vendor", label: "Vendor", width: 200 },
    { id: "VehicleNo.", label: "Vehicle No.",width: 140 },
    { id: "SealNo.", label: "Seal No.", width: 140 },
    { id: "LRNo.", label: "LR No.", width: 140},
    { id: "Action", label: "Actions", width: 140 },
  ];
  
  const roleData = [
    {
      DateTime:"22/05/2022 3.45 pm",
      DocumentID:"001",
      Createdby:"Dushyanth",
      InvoiceNo: "876567",
      InvoiceDate:"22/05/2025",
      Vendor:"Brooklyn Simmons",
      VehicleNo:"TS 52 AG7894",
      SealNo: "TS 52 AG7894",
      LRNo:"TS 52 AG7894",
      },
      {
        DateTime:"22/05/2022 3.45 pm",
        DocumentID:"001",
        Createdby:"Dushyanth",
        InvoiceNo: "876567",
        InvoiceDate:"22/05/2025",
        Vendor:"Brooklyn Simmons",
        VehicleNo:"TS 52 AG7894",
        SealNo: "TS 52 AG7894",
        LRNo:"TS 52 AG7894",
        },
        {
          DateTime:"22/05/2022 3.45 pm",
          DocumentID:"001",
          Createdby:"Dushyanth",
          InvoiceNo: "876567",
          InvoiceDate:"22/05/2025",
          Vendor:"Brooklyn Simmons",
          VehicleNo:"TS 52 AG7894",
          SealNo: "TS 52 AG7894",
          LRNo:"TS 52 AG7894",
          },
          {
            DateTime:"22/05/2022 3.45 pm",
            DocumentID:"001",
            Createdby:"Dushyanth",
            InvoiceNo: "876567",
            InvoiceDate:"22/05/2025",
            Vendor:"Brooklyn Simmons",
            VehicleNo:"TS 52 AG7894",
            SealNo: "TS 52 AG7894",
            LRNo:"TS 52 AG7894",
            },
            {
              DateTime:"22/05/2022 3.45 pm",
              DocumentID:"001",
              Createdby:"Dushyanth",
              InvoiceNo: "876567",
              InvoiceDate:"22/05/2025",
              Vendor:"Brooklyn Simmons",
              VehicleNo:"TS 52 AG7894",
              SealNo: "TS 52 AG7894",
              LRNo:"TS 52 AG7894",
              },
              {
                DateTime:"22/05/2022 3.45 pm",
                DocumentID:"001",
                Createdby:"Dushyanth",
                InvoiceNo: "876567",
                InvoiceDate:"22/05/2025",
                Vendor:"Brooklyn Simmons",
                VehicleNo:"TS 52 AG7894",
                SealNo: "TS 52 AG7894",
                LRNo:"TS 52 AG7894",
                },
];

export const MatInwardTable = () => {
  const navigate = useNavigate();
  
  return (
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
  )
}

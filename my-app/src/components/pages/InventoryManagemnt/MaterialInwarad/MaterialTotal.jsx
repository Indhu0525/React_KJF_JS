import { Grid } from "@mui/material";
import React from "react";
import { Searchbox } from "../../../common/searchbar/Searchbox";
import { CommonButton } from "../../../common/button/CommonButton";
import { CiFilter } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { TiExport } from "react-icons/ti";
import { MatInwardTable } from "./MatInwardTable";
const apiData = {
  documentId: "ID 101",
  invoiceNumber: "INV-2025",
  vehicleNumber: "KA-01-AB-1234",
  createdDateTime: "2025-05-06 10:30 AM",
  invoiceDate: "2025-05-05",
  sealNumber: "SN-789456",
  createdBy: "John Doe",
  vendor: "ABC Pvt Ltd",
  lrNumber: "LR-654321",
};

const labelMapping = [
  { label: "Document ID", key: "documentId" },
  { label: "Invoice number", key: "invoiceNumber" },
  { label: "Vehicle number", key: "vehicleNumber" },
  { label: "Created date & time", key: "createdDateTime" },
  { label: "Invoice date", key: "invoiceDate" },
  { label: "Seal number", key: "sealNumber" },
  { label: "Created by", key: "createdBy" },
  { label: "Vendor", key: "vendor" },
  { label: "LR number", key: "lrNumber" },
];

export const MaterialTotal = () => {
  return (
    <div className="mt-4">
      <Grid container spacing={2} className="mt-5">
        {labelMapping.map(({ label, key }) => (
          <Grid size={{ xs: 12, md: 4 }} key={key}>
            <div>
              <span className="text-gray-500 text-sm font-semibold">
                {label}:<span className="text-[#303030]"> {apiData[key]}</span>
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="flex justify-between mt-5">
        <div className="flex gap-3">
          <Searchbox />
          <CommonButton
            icon={<CiFilter className="ml-1" />}
            label="Filter"
            iconPosition="right"
            className="bg-[#FFFFFF] rounded-xl px-8 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-2 border border-gray-100"
          />
        </div>
        <div className="flex gap-3">
          <CommonButton
            icon={<TiExport className="ml-1" />}
            label="Export"
            iconPosition="right"
            className="bg-[#F1F1F5] rounded-xl px-5 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-1 "
          />

          <CommonButton
            icon={<FiPlus className="ml-1" />}
            label="Add New"
            iconPosition="left"
            className="bg-[#FFE150] rounded-xl px-5 py-3 w-full !text-sm !text-[#181725] !font-semibold flex items-center gap-1 "
          />
        </div>
      </div>
      <div >
        <MatInwardTable/>
      </div>
    </div>
  );
};

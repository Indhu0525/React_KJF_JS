// components/table/ReusableTable.jsx

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CommonButton } from "../button/CommonButton";
import { Switchtoggle } from "../switchbuton/Switch";

export default function ReusableTable({
  columns = [],
  data = [],
  rowsPerPage = 10,
  onAssignClick = () => {},
  onEdit = () => {},
  onDelete = () => {},
  onToggle = () => {},
  renderCustomCell = null,
  renderCustomActions = null, 
}) {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleChangePage = (event, newPage) => setPage(newPage);

  return (
    <div className="w-full overflow-x-auto">
      <TableContainer sx={{ maxHeight: "calc(100vh - 230px)" }} className="custom-scrollbar">
  
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{ border: "none" }}
                  className="!text-sm !font-semibold !text-gray-500"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody    sx={{  border: "none" }}>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    if (renderCustomCell) {
                      const custom = renderCustomCell(column.id, value, row, idx);
                      if (custom !== undefined) return <TableCell key={column.id}    sx={{ border: "none" }}>{custom}</TableCell>;
                    }

                    // if (column.id === "Action") {
                    //   return (
                    //     <TableCell key={column.id}    sx={{  border: "none" }}>
                    //       <div className="flex items-center gap-2 border-0">
                    //       <Switchtoggle onChange={() => onToggle(row)}    sx={{ border: "none" }} />

                    //         <BiEditAlt
                    //           onClick={() => onEdit(row)}
                    //           className="text-[1.8rem] cursor-pointer text-gray-600 border border-gray-300 rounded-lg p-1"
                    //         />
                    //         <RiDeleteBin5Line
                    //           onClick={() => onDelete(row)}
                    //           className="text-[1.9rem] cursor-pointer text-red-600 border border-gray-300 rounded-lg px-2 py-1"
                    //         />
                    //       </div>
                    //     </TableCell>
                    //   );
                    // }
                    if (column.id === "Action" && renderCustomActions) {
                      return (
                        <TableCell key={column.id} sx={{ border: "none" }}>
                          {renderCustomActions(row, idx)}
                        </TableCell>
                      );
                    }
                    if (column.id === "Permission") {
                      return (
                        <TableCell key={column.id}    sx={{ border: "none" }}>
                          <CommonButton
                            onClick={() => onAssignClick(row)}
                            label="Assign"
                            className="bg-[#FFE150] rounded-lg w-full !text-sm !text-[#303030] !font-semibold flex items-center px-5 py-2"
                          />
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={column.id}
                        sx={{
                          maxWidth: column.id === "Description" ? column.width : "auto",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          border: "none",
                          fontWeight: "600",
                          color: "#303030",
                          fontSize: "0.9rem",
                        minWidth: column.width 

                        }}
                        
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-between items-center mt-4 px-4">
        <p className="text-sm font-semibold text-gray-600">
          Show entries: <span className="px-2 py-1 border rounded-md">{data.length}</span>
        </p>
        <div className="flex items-center">
          <button
            className="px-4 py-2 text-gray-700 font-medium"
            onClick={() => handleChangePage(null, Math.max(0, page - 1))}
            disabled={page === 0}
          >
            Previous
          </button>
          <div className="px-4 py-1 bg-yellow-100 border rounded-md text-gray-800 font-medium">
            {page + 1}
          </div>
          <button
            className="px-4 py-2 text-gray-700 font-medium"
            onClick={() => handleChangePage(null, Math.min(totalPages - 1, page + 1))}
            disabled={page >= totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
}

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
import { useNavigate } from 'react-router-dom';

// Your styled switch
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 25,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

// Table columns
const columns = [
  { id: "Role", label: "Role", width: 140 },
  { id: "Description", label: "Description", width: 550 },
  { id: "Action", label: "Action", width: 90 },
  { id: "Permission", label: "Permission", width: 90 },
];

// Example data from API (no icons)
const apiData = [
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

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  const rows = apiData;

  const handleChangePage = (event, newPage) => setPage(newPage);
  

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const navigate = useNavigate();

  const handleAssignClick = () => {
    navigate('/permission');
  };
  
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <TableContainer sx={{ maxHeight: "calc(100vh - 250px)" }} className="custom-scrollbar">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{ minWidth: column.width, border: "none" }}
                  className="!text-sm !font-semibold !text-gray-500 "
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell
                        key={column.id}
                        align={column.align || "left"}
                        sx={{
                          maxWidth:
                            column.id === "Description" ? column.width : "auto",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          border: "none",
                          fontWeight: "600",
                          color: "#303030",
                          fontSize: "0.9rem",
                        }}
                      >
                        {column.id === "Action" ? (
                          <div className="flex justify-left items-center gap-2">
                            <IOSSwitch  />
                            <BiEditAlt className="text-[1.8rem]   py-1 cursor-pointer text-gray-600  border border-gray-300 rounded-lg" />
                            <RiDeleteBin5Line className="text-[1.9rem] px-2  py-1 cursor-pointer text-red-600 border border-gray-300 rounded-lg" />
                          </div>
                        ) : column.id === "Permission" ? (
                          <div className="flex justify-left">
                            <CommonButton
                              onClick={handleAssignClick}
                              label="Assign"
                              className="bg-[#FFE150] justify-center  rounded-lg w-full !text-sm !text-[#303030] text-left !font-semibold flex items-center  px-5 py-2"
                            />
                          </div>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-between items-center mt-4 px-4">
        <p className="text-sm font-semibold text-gray-600 mr-2">Show entries: <span className="px-2 py-1 border rounded-md">{rows.length}</span></p>
        
        <div className="flex items-center">
          <button 
            className="px-4 py-2 text-gray-700 font-medium  rounded-l-md"
            onClick={() => handleChangePage(null, Math.max(0, page - 1))}
            disabled={page === 0}
          >
            Previous
          </button>
          
          <div className="px-4 py-1 flex items-center justify-center bg-yellow-100 text-gray-800 font-medium border border-yellow-200 rounded-md">
            {page + 1}
          </div>
          
          <button 
            className="px-4 py-2 text-gray-700 font-medium rounded-r-md"
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

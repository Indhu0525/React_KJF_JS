import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CommonButton } from '../button/CommonButton';

const columns = [
  { id: 'Role', label: 'Role',  },
  { id: 'Description', label: 'Description', },
  {
    id: 'Action',
    label: 'Action',
  
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
  
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(Role, Description, Action, size) {

  return { Role, Description, Action, size };
}

const rows = [
    createData('Admin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 1324171354, 3287263),
    createData('Senior Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 1403500365, 9596961),
    createData('Sales Manager', 'ILorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.T', 60483973, 301340),
    createData('United States', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 327167434, 9833520),
    createData('Inward Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 37602103, 9984670),
    createData('Executive', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 25475400, 7692024),
    createData('HOD', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 83019200, 357578),
    createData('Production Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 4857000, 70273),
    createData('Mexico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam tortor. Suspendisse scelerisque mauris non purus pulvinar consequat sit amet sit amet nibh.', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div sx={{ width: '100%', overflow: 'auto', }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)', overflow: 'auto',border: 'none',width:'100%' }}>
        <Table stickyHeader aria-label="sticky table"sx={{ borderCollapse: 'collapse',  }}>
          <TableHead>
            <TableRow  sx={{ border: 'none',}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    borderBottom: 'none',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal', // allows wrapping
                 
                  }}
                  className='!text-sm !font-semibold !text-gray-500'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}sx={{ border: 'none' }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ borderBottom: 'none' }} className='!text-sm !font-semibold'>
                        {column.id === 'Action' ? (
                            <CommonButton
                                      label="Add"
                                      className="bg-[#FFE150] justify-center mt-10 rounded-lg w-full !text-sm !text-[#303030] text-center !font-semibold flex items-center  px-8 py-3"
                                    />
                        ) : column.format && typeof value === 'number' ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                      
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

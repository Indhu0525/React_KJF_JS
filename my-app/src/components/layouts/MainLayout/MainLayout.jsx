import React from 'react'
import {  useTheme } from '@mui/material/styles';
import {
  Box,
  useMediaQuery
} from '@mui/material';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../headerLayout/Header';
import { Outlet,useLocation  } from 'react-router-dom';
export const MainLayout = () => {
     const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('md'));
     
      const [open, setOpen] = React.useState(false);
      const location = useLocation(); 
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    
  return (
    <Box sx={{ 
         display: 'flex', 
         height: '100vh',
         bgcolor: '#FFE150', 
         overflow: 'hidden'  
       }}>
       <Sidebar   open={open} 
           isMobile={isMobile} 
           handleDrawerClose={handleDrawerClose}/>
         {/* Main Layout Container */}
         <Box sx={{ 
           flexGrow: 1, 
           display: 'flex', 
           flexDirection: 'column',
           overflow: 'hidden',
           margin: '15px 15px 15px 0px',
           borderRadius: '15px'
         }}>
           <Header open={open} 
               isMobile={isMobile} 
               handleDrawerOpen={handleDrawerOpen}
               currentRoute={location.pathname}/>
         
           <Box sx={{ 
             flexGrow: 1, 
             bgcolor: '#ffffff',
             height: 'calc(100vh - 64px)',
        
             padding: 3       
           }}>
              <Outlet /> 
          
           </Box>
         </Box>
       </Box>
  )
}

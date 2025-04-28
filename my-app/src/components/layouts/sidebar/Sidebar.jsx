import React, { useState } from 'react';
import '../../../styles/customscroll.scss';
import '../../../styles/commoncss.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PeopleIcon from '@mui/icons-material/People';
import { RxDashboard } from "react-icons/rx";
import List from '@mui/material/List';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import { CommonButton } from '../../common/button/CommonButton';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <RxDashboard className="!text-[1.125rem] text-[#181725]" />,
      path: '/dashboard'

    },
    {
      text: 'User & Role Management',
      icon: <PeopleIcon  className="!text-[1.125rem] text-[#181725]" />,
      path: '/user & role',
      children: [
        {
          text: 'Roles & Permissions',
          path: '/role-management',
        },
        {
          text: 'User Management',
          path: '/user role/roles',
        },
      ],
    },
    {
      text: 'Inventory Management',
      icon: <LuShoppingCart className="!text-[1.125rem] text-[#181725]" />,
      path: '/dashboard',
      children: [
        {
          text: 'inventory',
          path: 'inventoray/invm',
        },
      ],
    },
    {
      text: 'Production',
      icon: <HouseSidingOutlinedIcon className="!text-[1.125rem] text-[#181725]" />,
      path: '/dashboard',
      children: [
        {
          text: 'inventory',
          path: 'inventoray/invm',
        },
      ],
    },
    {
      text: 'Transfer & Logistics',
      icon: <LocalShippingOutlinedIcon className="!text-[1.125rem] text-[#181725]" />,
      path: '/dashboard',
      children: [
        {
          text: 'inventory',
          path: 'inventoray/invm',
        },
      ],
    },
    {
      text: 'Task & Logs',
      icon: <IoMdCheckboxOutline className="!text-[1.125rem] text-[#181725]" />,
      path: '/dashboard',
      children: [
        {
          text: 'inventory',
          path: 'inventoray/invm',
        },
      ],
    },
  ];
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className="h-screen flex flex-col sidebar "style={{ minWidth: '285px', width: '285px', flexShrink: 0 }}>
    {/*  logo */}
    <div className="shrink-0">
      <img src="/assets/logo.png" alt="img-logo" className="px-6 py-8 !w-[220px]" />
    </div>
  
    {/* sidebar menu */}
    <div className="flex-1 overflow-auto overflow-x-hidden custom-scrollbar ">
      <List className="!p-0">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItemButton
              className={`gap-3 !px-5 !py-2.5 ${openDropdown === index ? 'bg-[#bb5050]' : 'hover:bg-[#f0f0f0]'}`}
              onClick={
                item.children
                  ? () => handleClick(index)
                  : () => navigate(item.path)
              }
            >
              <ListItemIcon className="!min-w-0">{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  className: '!text-sm !text-[#181725] !font-semibold',
                }}
              />
              {item.children && (openDropdown === index ? <ExpandMore /> : <KeyboardArrowRightIcon />)}
            </ListItemButton>
  
            {item.children && openDropdown === index && (
  <Collapse in={openDropdown === index} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {item.children.map((child) => (
        <ListItemButton
        key={child.text}
        sx={{ pl: 2 }}
        className='!px-6 !py-2.5'
        onClick={() => navigate(child.path)}
      >
      
          <ListItemText
            primary={child.text}
            primaryTypographyProps={{
              className: '!text-sm !text-[#181725] !font-semibold',
            }}
          />
        </ListItemButton>
      ))}
    </List>
  </Collapse>
)}

          </React.Fragment>
        ))}
      </List>
    </div>
  
    {/*  logout button */}
    <div className="shrink-0 py-6 px-4">
      <CommonButton
        label="Log Out"
        onClick={handleClick}
        className="bg-[#FFFFFF] rounded-2xl p-3 w-full !text-sm !text-[#181725] !font-semibold"
        icon={<LogoutOutlinedIcon className="ml-1" />}
      />
    </div>
  </div>
  
  )
}

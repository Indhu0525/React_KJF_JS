import React from "react";
import styles from "./Login.module.scss";
import { Box, Container } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CommonButton } from "../../components/button/CommonButton";
export const Login = () => {
  return (
    <div className={`${styles.loginPage} flex justify-center items-center flex-col gap-[30px] h-full`}>
      <img src="/assets/logo.png" alt="Logo" className={styles.logoimg}></img>
      <Container maxWidth="xs" className={styles.LoginFForm}>
        <div>
          <h2 className="m-0 text-xl font-bold">Log In</h2>
          <Box className={styles.loginform} sx={{ maxWidth: "400px" }}>
            <div>
              <label htmlFor="message"className="block text-xs  font-medium mb-1 {styles.loginlabel}">
                Email or Mobile Number
              </label>
              <input type="text" placeholder="Enter email or mobile number" className="w-full px-4 py-2 border text-xs text-[#303030] border-gray-300 rounded-md focus:outline-none placeholder:text-xs" required />
            </div>

            <div className="mt-5 relative">
              <label htmlFor="message" className="block text-xs font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 pr-10 border border-gray-300 text-xs text-[#303030] rounded-md focus:outline-none placeholder:text-xs" required/>
                <VisibilityIcon fontSize="small"className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#303030] cursor-pointer"/>
              </div>
            </div>
            <CommonButton label="Log In" className="w-full mt-[5rem]  font-semibold py-2 px-4 rounded "/>
          </Box>
        </div>
      </Container>
    </div>
  );
};

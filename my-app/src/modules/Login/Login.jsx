import React from "react";
import styles from "./Login.module.scss";
import { Box, Container } from "@mui/material";
export const Login = () => {
  return (
    <div className={styles.loginPage}>
      <img src="/assets/logo.png" alt="Logo" className={styles.logoimg}></img>
      <Container maxWidth="xs" className={styles.LoginFForm}>
        <div>
          <h2 className="m-0 text-xl font-bold">Log In</h2>
          <Box className={styles.loginform} sx={{ maxWidth: "400px" }}>
            <div>
                 <label   htmlFor="message"   className="block text-xs font-medium mb-1"  >
                Email or Mobile Number
              </label>
              <input  type="text"   placeholder="Enter email or mobile number"    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-xs"  required />
            </div>
            <div className="mt-5">
              <label htmlFor="message"className="block text-xs font-medium mb-1" >
                Password
              </label>
              <input type="text"  placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-xs" required />
            </div>
            <button className=" w-full mt-16  font-semibold py-2 px-4 rounded">
              Log In
            </button>
          </Box>
        </div>
      </Container>
    </div>
  );
};

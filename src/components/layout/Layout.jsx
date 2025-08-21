// src/components/layout/Layout.jsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

const Main = styled.main`
  min-height: 100vh;
  padding-top: 70px; // Space for fixed navbar
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}<Outlet /></Main>
      <Footer />
    </>
  );
};

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <Main>
//         {children}
//         <Outlet />
//       </Main>
//       <Footer />
//     </>
//   );
// };

export default Layout;
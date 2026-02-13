// src/App.js
import React from "react";
import Banner from "../Personal/Banner";
import styled from 'styled-components';
import Cryptomarket from "./Cryptomarket";

import Table from "./Table";



function Market() {


  return (
    <>
      <Banner />
      <Cryptomarket />
      <Table />
    </>
  );
}

export default Market;


import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <>
      <h1> This is Home page </h1>
      <Header />
    </>
  );
}
export default Home;

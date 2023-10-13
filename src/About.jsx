import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function About() {
  const navigate = useNavigate(); // Invoke useNavigate to get the navigate function

  function handleClick() {
    navigate("/contact"); // Use the navigate function to change the route
  }

  return (
    <>
      <h1>This is About page</h1>
      <Header />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

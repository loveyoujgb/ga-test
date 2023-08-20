import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="button-test"
        onClick={() => {
          console.log("button-test");
        }}
      >
        button
      </div>
      <div onClick={() => navigate("/")}>go to home</div>
    </div>
  );
};

export default TestPage;

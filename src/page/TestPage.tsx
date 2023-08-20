import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga";

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="button-test"
        onClick={() => {
          console.log("button-test");
          ReactGA.event({
            category: "버튼",
            action: "클릭",
            label: "예제 버튼",
          });
        }}
      >
        button
      </div>
      <div onClick={() => navigate("/")}>go to home</div>
    </div>
  );
};

export default TestPage;

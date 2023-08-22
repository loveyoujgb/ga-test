import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="button-test"
        onClick={() => {
          console.log("button-test");
          ReactGA.event({
            action: "hello-action",
            category: "test-category",
            label: "test-label", // optional
            value: 1, // optional, must be a number
            nonInteraction: true, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
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

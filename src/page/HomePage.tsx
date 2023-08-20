import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate("/test");
        }}
      >
        testPage
      </div>
    </div>
  );
};

export default HomePage;

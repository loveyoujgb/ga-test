import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./page/HomePage";
import TestPage from "./page/TestPage";
import { initGA, logPageView } from "./utils/googleAnalytics";

initGA();

const Router = () => {
  let location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
};

export default Router;

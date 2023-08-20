import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import TestPage from "./page/TestPage";

const Router = () => {
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

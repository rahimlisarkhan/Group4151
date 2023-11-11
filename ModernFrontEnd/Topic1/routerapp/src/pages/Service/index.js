import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Hazirliq from "./Hazirliq";
import English from "./English";
import NotFoundPage from "../404";

const Service = () => {
  return (
    <div>
      <h1>Service</h1>

      <div>
        <Link to="hazirliq">Haizlriq</Link>
        <br />
        <Link to="ingilis-dili">English</Link>
      </div>

      <hr />
      <div>
        <Routes>
          {/* <Route path="/" element={<Navigate to="hazirliq" replace />} /> */}
          <Route path="/" element={<Hazirliq />} />
          <Route path="ingilis-dili" element={<English />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Service;

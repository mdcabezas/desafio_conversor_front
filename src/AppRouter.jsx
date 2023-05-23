import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Inicial from "./components/Inicial";
import RutaProtegida from "./components/RutaProtegida";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";



export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<RutaProtegida><Inicial /></RutaProtegida>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

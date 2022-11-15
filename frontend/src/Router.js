import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Campanhas from "./pages/campanhas";
import Dispositivos from "./pages/dispositivos";
import Clientes from "./pages/clientes";
import FormClientes from "./pages/clientes/form";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Clientes />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/campanhas" element={<Campanhas />} />
      <Route path="/dispositivos" element={<Dispositivos />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/clientes/novo" element={<FormClientes />} />
    </Routes>
  );
}

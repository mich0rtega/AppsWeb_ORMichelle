import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import StorePage from "@/pages/StorePage"; // Página principal de la tienda
import Home from "@/pages/Home"; // Página de inicio después de login
import Inventary from "@/pages/Inventary";
import AddProduct from "@/pages/AddProduct";
import Employee from "@/pages/Employee";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserProvider } from "@/context/UserContext";

function App() {
  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            {/* Página principal de la tienda - acceso público */}
            <Route path="/" element={<StorePage />} />

            {/* Página de login - acceso público */}
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas - solo accesibles si el usuario está autenticado */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home /> {/* Página de inicio protegida */}
                </ProtectedRoute>
              }
            />
            <Route
              path="/Inventario"
              element={
                <ProtectedRoute>
                  <Inventary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Agregar-Producto"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Empleados"
              element={
                <ProtectedRoute>
                  <Employee />
                </ProtectedRoute>
              }
            />
            {/* Ruta de logout */}
            <Route path="/Logout" element={<Logout />} />

            {/* Ruta para 404 - página no encontrada */}
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <NotFound />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

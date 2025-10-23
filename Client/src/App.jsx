import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

// Páginas
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cursos from "./pages/Cursos";
import Comunidad from "./pages/Comunidad";
import Perfil from "./pages/Perfil";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 pt-8 pb-10">
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Auth */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          {/* Módulos */}
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/perfil" element={<Perfil />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Aetheris
      </footer>
    </div>
  );
}

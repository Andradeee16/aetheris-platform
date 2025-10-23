import { NavLink, Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";

const linkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition-opacity";
const linkInactive = "opacity-70 hover:opacity-100";
const linkActive = "opacity-100 underline underline-offset-4";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-black backdrop-blur supports-[backdrop-filter]:bg-black">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        {/* Marca */}
        <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Aetheris Logo" className="h-12 w-auto" />
            <span className="sr-only">Aetheris</span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden text-white items-center gap-2 md:flex">
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Cursos
          </NavLink>
          <NavLink
            to="/comunidad"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Comunidad
          </NavLink>
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Perfil
          </NavLink>
        </nav>

        {/* Acciones (derecha) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/auth/login"
            className="rounded-md px-3 py-2 text-sm text-white font-medium outline outline-1 transition-opacity hover:opacity-80"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/auth/register"
            className="rounded-md px-3 py-2 text-sm text-white font-medium outline outline-1 transition-opacity hover:opacity-80"
          >
            Crear cuenta
          </Link>
        </div>

        {/* Hamburger / menú móvil simple (texto por ahora) */}
        <div className="md:hidden">
          <nav className="flex text-white items-center gap-3">
            <NavLink
              to="/cursos"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }>
              Cursos
            </NavLink>
            <NavLink
              to="/comunidad"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }>
              Comunidad
            </NavLink>
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }>
              Perfil
            </NavLink>
            <Link
              to="/auth/login"
              className="px-3 py-2 text-sm font-medium opacity-70 hover:opacity-100"
            >
              Entrar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const whiteBgRoutes = ["/solucao", "/sobre", "/login"]; // ajuste conforme novas rotas
  const isWhiteBgPage = whiteBgRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (!isWhiteBgPage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isWhiteBgPage]);

  const bgClass = isWhiteBgPage
    ? "bg-cyan-500 text-white"
    : isScrolled
    ? "bg-cyan-500 shadow-lg text-white"
    : "bg-transparent text-white";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="logo-code-nexus" className="w-20 h-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="/" className="transition duration-300 hover:text-cyan-700">
                Início
              </a>
            </li>
            <li>
              <a href="/solucao" className="transition duration-300 hover:text-cyan-700">
                Nossa Solução
              </a>
            </li>
            <li>
              <a href="/sobre" className="transition duration-300 hover:text-cyan-700">
                Sobre Nós
              </a>
            </li>
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="ml-6 px-6 py-2 rounded-full text-sm font-bold transition duration-600 ease-in-out
                       bg-gradient-to-l from-cyan-600 to-gray-400 text-white 
                       hover:from-gray-500 hover:to-cyan-700 
                       shadow-md hover:cursor-pointer hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Área do Colaborador
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cyan-700 text-white rounded-b-lg shadow-md transition-all duration-300">
          <a href="/" className="block px-6 py-3 hover:bg-cyan-800 transition duration-200">
            Início
          </a>
          <a href="/solucao" className="block px-6 py-3 hover:bg-cyan-800 transition duration-200">
            Nossa Solução
          </a>
          <a href="/sobre" className="block px-6 py-3 hover:bg-cyan-800 transition duration-200">
            Sobre Nós
          </a>
          <button
            onClick={() => navigate("/login")}
            className="w-full text-left px-6 py-3 mt-2 
                       bg-gradient-to-r from-emerald-600 to-cyan-500 text-white 
                       hover:from-emerald-700 hover:to-cyan-600 
                       transition duration-300 ease-in-out rounded-b-lg"
          >
            Área do Colaborador
          </button>
        </div>
      )}
    </nav>
  );
}

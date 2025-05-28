import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const clickColaborador = () => {
    // fazer a verificação/autenticação e redirecionar pro login
    navigate("/login"); 
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Code Nexus</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm">
            <li><a href="/" className="hover:text-blue-400">Início</a></li>
            <li><a href="#" className="hover:text-blue-400">Nossa Solução</a></li>
            <li><a href="#" className="hover:text-blue-400">Sobre</a></li>
            <li><a href="#" className="hover:text-blue-400">Contato</a></li>
          </ul>
          <button
            onClick={clickColaborador}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
          >
            Área do Colaborador
          </button>
        </div>

        {/* Mobile menu icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm">
          <a href="#" className="block hover:text-blue-400">Início</a>
          <a href="#" className="block hover:text-blue-400">Nossa Solução</a>
          <a href="#" className="block hover:text-blue-400">Sobre</a>
          <a href="#" className="block hover:text-blue-400">Contato</a>
          <button
            onClick={clickColaborador}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Área do Colaborador
          </button>
        </div>
      )}
    </nav>
  );
}

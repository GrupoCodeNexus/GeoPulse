import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const clickColaborador = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-slate-950 text-white px-6 py-4 shadow-lg border-b border-emerald-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-emerald-400">Code Nexus</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="/" className="transition duration-300 hover:text-emerald-300">Início</a></li>
            <li><a href="#" className="transition duration-300 hover:text-emerald-300">Nossa Solução</a></li>
            <li><a href="#" className="transition duration-300 hover:text-emerald-300">Sobre Nós</a></li>
            <li><a href="#" className="transition duration-300 hover:text-emerald-300">Contato</a></li>
          </ul>
          <button
            onClick={clickColaborador}
            className="ml-6 px-6 py-2 rounded-full text-sm font-semibold 
                       bg-gradient-to-r from-emerald-600 to-cyan-500 text-white 
                       hover:from-emerald-700 hover:to-cyan-600 
                       shadow-md hover:cursor-pointer hover:shadow-lg transition duration-300 ease-in-out 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Área do Colaborador
          </button>
        </div>

        {/* Mobile menu icon */}
        <button onClick={toggleMenu} className="md:hidden text-3xl text-emerald-400">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 text-sm bg-slate-900 rounded-b-lg shadow-md">
          <a href="#" className="block px-6 py-2 hover:bg-slate-800 hover:text-emerald-300 transition duration-200">Início</a>
          <a href="#" className="block px-6 py-2 hover:bg-slate-800 hover:text-emerald-300 transition duration-200">Nossa Solução</a>
          <a href="#" className="block px-6 py-2 hover:bg-slate-800 hover:text-emerald-300 transition duration-200">Sobre Nós</a>
          <a href="#" className="block px-6 py-2 hover:bg-slate-800 hover:text-emerald-300 transition duration-200">Contato</a>
          <button
            onClick={clickColaborador}
            className="w-full text-left px-6 py-2 mt-2 
                       bg-gradient-to-r from-emerald-600 to-cyan-500 text-white 
                       hover:from-emerald-700 hover:to-cyan-600 
                       transition duration-300 ease-in-out rounded-b-lg md:rounded-none"
          >
            Área do Colaborador
          </button>
        </div>
      )}
    </nav>
  );
}

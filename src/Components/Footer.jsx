import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-white py-12 px-4 border-t border-emerald-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div>
          <img src={logo} alt="logo-code-nexus" className="w-15 mb-3"/>
          <p className="text-sm text-gray-200 leading-relaxed mb-5">
            Tecnologia e inovação a serviço da prevenção e resposta a desastres ambientais.
          </p>
          <div className="flex space-x-5 mt-5">
            <a href="#" className="text-gray-200 hover:text-sky-300 transition duration-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-200 hover:text-sky-300 transition duration-300 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-200 hover:text-sky-300 transition duration-300 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-sky-300">Empresa</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-sky-300 transition duration-200">Sobre nós</a></li>
            <li><a href="#" className="hover:text-sky-300 transition duration-200">Nossa Missão</a></li>
            <li><a href="#" className="hover:text-sky-300 transition duration-200">Projetos</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-sky-300">Suporte</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-sky-300 transition duration-200">FAQ</a></li>
            <li><a href="#" className="hover:text-sky-300 transition duration-200">Fale Conosco</a></li>
            <li><a href="#" className="hover:text-sky-300 transition duration-200">Central de Ajuda</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-sky-300">Receba Nossas Atualizações</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-4 py-2 rounded-lg bg-cyan-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-transparent focus:border-cyan-400"
            />
            <button
              type="submit"
              className="transition duration-300 font-semibold text-white px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 shadow-md hover:shadow-cyan-300/30 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Code Nexus</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}

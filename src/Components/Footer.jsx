import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Code Nexus</h2>
          <p className="text-sm text-gray-400">Tecnologia que salva vidas.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Empresa</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white">Serviços</a></li>
            <li><a href="#" className="hover:text-white">Portfólio</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Suporte</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Ajuda</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Assine nossa newsletter</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Code Nexus. Todos os direitos reservados.
      </div>
    </footer>
  );
}

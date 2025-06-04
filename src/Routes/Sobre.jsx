import { FaRocket, FaUsers, FaHeartbeat, FaGithub, FaLinkedin } from "react-icons/fa";
import francisco from '../assets/francisco.png';
import kayque from '../assets/kayque.png';
import matheus from '../assets/matheus.png';

const Sobre = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-16 space-y-20">
      {/* Cabeçalho */}
      <section className="mt-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-4">Sobre Nós</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Somos um time apaixonado por inovação, com a missão de transformar desafios em soluções tecnológicas impactantes.
        </p>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaRocket className="text-3xl text-cyan-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Missão</h3>
          <p className="text-gray-600 text-sm">
            Usar tecnologia para antecipar e mitigar desastres, protegendo comunidades e o meio ambiente.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-3xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visão</h3>
          <p className="text-gray-600 text-sm">
            Ser referência global em soluções tecnológicas humanitárias e sustentáveis.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaHeartbeat className="text-3xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Valores</h3>
          <p className="text-gray-600 text-sm">
            Ética, empatia, criatividade, colaboração e compromisso com impacto real.
          </p>
        </div>
      </section>

      {/* Equipe */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-cyan-800 mb-10">Nosso Time</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              nome: "Francisco Vargas",
              funcao: "Desenvolvedor",
              img: francisco,
              github: "https://github.com/Franciscov25",
              linkedin: "https://linkedin.com/in/franciscovargas7"
            },
            {
              nome: "Matheus Eiki",
              funcao: "Desenvolvedor",
              img: matheus,
              github: "https://github.com/matheuseiki",
              linkedin: "https://www.linkedin.com/in/matheus-e-ikeda-943889331/"
            },
            {
              nome: "Kayque Carvalho",
              funcao: "Desenvolvedor",
              img: kayque,
              github: "https://github.com/Kay-Carv",
              linkedin: "https://www.linkedin.com/in/kayque-carvalho-49a190283/"
            },
          ].map((membro, index) => (
            <div key={index} className="rounded-xl overflow-hidden border-2 border-cyan-200 shadow-cyan-200 hover:shadow-xl transition">
              <img src={membro.img} alt={membro.nome} className="w-full h-64 object-cover" />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-lg">{membro.nome}</h3>
                <p className="text-sm text-gray-500 mb-3">{membro.funcao}</p>
                <div className="flex justify-center gap-4">
                  {membro.github && (
                    <a
                      href={membro.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {membro.linkedin && (
                    <a
                      href={membro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sobre;

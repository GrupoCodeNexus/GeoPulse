import { useState } from "react";
import { FaGlobeAmericas, FaLightbulb, FaUsers } from "react-icons/fa";
import bg1 from '../assets/bg1.png';
import bg3 from '../assets/bg3.png';

import ibm from '../assets/ibm-logo.png';
import msf from '../assets/msf-logo.png';
import inpe from '../assets/inpe-logo.png';
import defesaCivil from '../assets/defesa-civil-logo.png';
import bombeiros from '../assets/bombeiros-logo.png';

const parceiros = [
  { name: 'IBM', img: ibm },
  { name: 'Médicos Sem Fronteiras', img: msf },
  { name: 'INPE', img: inpe },
  { name: 'Defesa Civil', img: defesaCivil },
  { name: 'Bombeiros', img: bombeiros },
];


export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="w-full">
        <img src={bg1} alt="Imagem de fundo" className="w-full h-auto block" />
      </div>

      {/* Conteúdo principal */}
      <div className="px-6 lg:px-20 py-10">
        <div className="text-center mt-20 mb-20 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Os eventos extremos e desastres ambientais são causas de acidentes e tragédias.
          <span className="text-cyan-800"> Já parou para pensar se pudéssemos prever estes acontecimentos e nos antecipar deles?</span> 
        </div>

        {/* Imagem central com botão */}
        <div className="mb-10 relative w-full -mx-6 lg:-mx-20">
          <img src={bg3} alt="img-geo-pulse" className="w-full h-auto" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a href="/solucao">
              <button className="bg-cyan-800 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base md:text-base font-semibold shadow-lg hover:bg-cyan-700 transition hover:cursor-pointer">
                Conhecer a solução
              </button>
            </a>
          </div>
        </div>

        {/* Três cards principais */}
        <section className="grid grid-cols-1 mb-30 mt-30 md:grid-cols-3 gap-10">
          <div className="bg-cyan-50 rounded-xl shadow-sm shadow-cyan-50 p-6 text-center hover:shadow-lg transition">
            <FaGlobeAmericas className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visão Global</h3>
            <p className="text-gray-600 text-sm">Visamos salvar vidas mundialmente, trazendo maior segurança internacional.</p>
          </div>

          <div className="bg-cyan-100 rounded-xl shadow-sm shadow-cyan-100 p-6 text-center hover:shadow-lg transition">
            <FaLightbulb className="text-cyan-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h3>
            <p className="text-gray-600 text-sm">
              Estimulamos a criatividade e o uso de tecnologias emergentes para criar ideias sustentáveis com alto impacto social.
            </p>
          </div>

          <div className="bg-cyan-50 rounded-xl shadow-sm shadow-cyan-50 p-6 text-center hover:shadow-lg transition">
            <FaUsers className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaboração</h3>
            <p className="text-gray-600 text-sm">
              Trabalhamos em equipes multidisciplinares com foco na empatia, escuta ativa e colaboração para resolver problemas reais.
            </p>
          </div>
        </section>

        {/* PARCEIROS */}
        <section className="bg-white text-center py-16 mt-20">
          <p className="text-cyan-600 font-bold text-sm uppercase mb-4">Parceiros</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Nossa solução tem o apoio <br className="hidden sm:block" />
            das grandes empresas
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2">
            confira abaixo quais são elas.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            {parceiros.map((p) => (
              <img
                key={p.name}
                src={p.img}
                alt={p.name}
                className="h-12 sm:h-14 md:h-16 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              />
            ))}
          </div>
        </section>
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

    </div>
  );
}

import { useState } from "react";
import { FaTools, FaRecycle, FaHeartbeat } from "react-icons/fa";
import bg02 from "../assets/bg02.png";

const solutionCards = [
  {
    id: 1,
    icon: <FaTools className="text-blue-600 text-5xl" />,
    title: "Tecnologia Aplicada",
    description:
      "Integramos drones, IA e sensores para otimizar a logística, comunicação e avaliação de áreas de risco em tempo real.",
    color: "bg-blue-100",
  },
  {
    id: 2,
    icon: <FaRecycle className="text-green-600 text-5xl" />,
    title: "Sustentabilidade",
    description:
      "Nossas soluções usam energia solar, materiais recicláveis e práticas sustentáveis para reduzir o impacto ambiental mesmo em zonas de crise.",
    color: "bg-green-100",
  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-red-500 text-5xl" />,
    title: "Foco na Vida",
    description:
      "Todas as tecnologias e estratégias visam um único objetivo: salvar vidas com empatia, rapidez e responsabilidade social.",
    color: "bg-red-100",
  },
];

export default function NossaSolucao() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-6 lg:px-20 py-10 bg-white">
      {/* Hero */}
      <div className="-mt-10 md:-mx-20 lg:-mx-20 mb-12">
        <img src={bg02} alt="Nossa Solução" className="w-full h-auto" />
      </div>

      {/* Título */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-500 mb-4">Nossa Solução</h2>
        <p className="text-gray-700 text-lg">
          Inovamos para transformar emergências em oportunidades de reconstrução com dignidade, sustentabilidade e velocidade.
        </p>
      </section>

      {/* Cards com Animação */}
      <section className="space-y-10">
        {solutionCards.map((card) => {
          const isOpen = activeCard === card.id;
          return (
            <div
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className="cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-56 md:h-48 transform-style-preserve-3d transition-transform duration-700 rounded-2xl shadow-md shadow-cyan-200 ${
                  isOpen ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente */}
                <div className="absolute inset-0 backface-hidden bg-gray-50 rounded-2xl flex flex-row items-center overflow-hidden">
                  <div className={`w-1/3 h-full flex items-center justify-center ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="w-2/3 px-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
                    <p className="text-cyan-500 text-xl mt-2">+</p>
                  </div>
                </div>

                {/* Verso */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-cyan-100 border-2 border-cyan-500 rounded-2xl p-6 flex items-center">
                  <p className="text-gray-700 text-sm text-justify">{card.description}</p>
                  <span className="absolute top-4 right-6 text-2xl text-cyan-500 font-bold">
                    &ndash;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Missão */}
      <section className="mt-20 bg-cyan-50 rounded-xl p-10 text-center shadow-inner">
        <h3 className="text-2xl font-bold text-cyan-700 mb-4">Missão do Projeto</h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-md">
          Criar soluções tecnológicas que respeitam o meio ambiente e colocam o ser humano no centro das decisões, promovendo resiliência em contextos de vulnerabilidade.
        </p>
      </section>

      {/* Chamada para Ação */}
      <section className="mt-16 bg-cyan-600 text-white rounded-2xl p-10 text-center shadow-xl">
        <h4 className="text-3xl font-bold mb-4">Junte-se a nós nessa missão</h4>
        <p className="text-lg mb-6">
          Sua participação pode transformar comunidades e salvar vidas. Seja parte da inovação que constrói um futuro mais justo e seguro.
        </p>
        <button className="bg-amber-200 text-cyan-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 hover:cursor-pointer transition">
          Quero contribuir
        </button>
      </section>

      {/* Estilo de animação */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

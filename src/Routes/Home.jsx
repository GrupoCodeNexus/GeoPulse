import { useState } from "react";
import { FaGlobeAmericas, FaLightbulb, FaUsers } from "react-icons/fa";
import bg1 from '../assets/bg1.png'

const toggleCards = [
  {
    id: 1,
    title: "Equipamentos Aéreos",
    number: "01",
    description:
      "Equipamentos aéreos autônomos que ultrapassam barreiras geográficas para levar medicamentos, alimentos e equipamentos essenciais a regiões inacessíveis após desastres.\n\nCombinam agilidade e precisão para salvar vidas onde humanos ou veículos tradicionais não chegam.",
  },
  {
    id: 2,
    title: "Energia Limpa Móvel",
    number: "02",
    description:
      "Unidades móveis de geração de energia limpa alimentadas por fontes renováveis.\n\nFornecem suporte emergencial sustentável em zonas afetadas por desastres ou falta de infraestrutura.",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-6 lg:px-20 py-10 bg-white">
      {/* Hero */}
      <div className="-mt-10 md:-mx-20 lg:-mx-20 mb-8">
        <img src={bg1} alt="Imagem de fundo" className="w-full h-auto" />
      </div>


      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaGlobeAmericas className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Visão Global</h3>
          <p className="text-gray-600 text-sm">descrição legal</p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h3>
          <p className="text-gray-600 text-sm">
            Estimulamos a criatividade e o uso de tecnologias emergentes para criar ideias sustentáveis com alto impacto social.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaUsers className="text-green-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaboração</h3>
          <p className="text-gray-600 text-sm">
            Trabalhamos em equipes multidisciplinares com foco na empatia, escuta ativa e colaboração para resolver problemas reais.
          </p>
        </div>
      </section>

      {/* Toggle Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toggleCards.map((card) => {
          const isOpen = activeCard === card.id;
          return (
            <div
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className="relative w-full h-64 cursor-pointer perspective"
            >
              <div
                className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full relative rounded-xl shadow-xl border-2 ${
                  isOpen ? "rotate-y-180 border-emerald-500" : "border-gray-300"
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {card.title}
                    </h3>
                    <span className="text-sm text-gray-400">{card.number}</span>
                  </div>
                  <span className="text-emerald-500 text-3xl font-bold">+</span>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 rounded-xl flex flex-col justify-between border-t border-emerald-500">
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {card.description}
                  </p>
                  <span className="text-emerald-500 text-3xl font-bold">&ndash;</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

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

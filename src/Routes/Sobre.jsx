import { FaRocket, FaUsers, FaHeartbeat } from "react-icons/fa";

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
              nome: "Camila Ferreira",
              funcao: "Desenvolvedora Full Stack",
              img: "https://images.unsplash.com/photo-1614289323161-7165cd65c230?auto=format&fit=crop&w=500&q=80",
            },
            {
              nome: "Lucas Martins",
              funcao: "Designer UX/UI",
              img: "https://images.unsplash.com/photo-1603415526960-f8f76b38d33d?auto=format&fit=crop&w=500&q=80",
            },
            {
              nome: "Ana Souza",
              funcao: "Engenheira de Dados",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
            },
          ].map((membro, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={membro.img} alt={membro.nome} className="w-full h-64 object-cover" />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-lg">{membro.nome}</h3>
                <p className="text-sm text-gray-500">{membro.funcao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Sobre;

import { useState, useEffect } from "react" // Importa useState e useEffect
import { FaRobot, FaLeaf, FaHandsHelping, FaRegNewspaper } from "react-icons/fa" // Adiciona FaRegNewspaper
import { GiTechnoHeart } from "react-icons/gi"

export default function Solucao() {
  const [updates, setUpdates] = useState([]) // Estado para armazenar as atualizações
  const [loadingUpdates, setLoadingUpdates] = useState(true) // Estado para indicar carregamento das atualizações
  const [errorUpdates, setErrorUpdates] = useState(null) // Estado para erros ao buscar atualizações

  // useEffect para buscar as atualizações quando o componente é montado
  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch("http://localhost:3000/updates")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUpdates(data)
      } catch (error) {
        console.error("Erro ao buscar atualizações:", error)
        setErrorUpdates("Não foi possível carregar as atualizações. Tente novamente mais tarde.")
      } finally {
        setLoadingUpdates(false)
      }
    }

    fetchUpdates()
  }, []) // O array para o useEffect rodar apenas uma vez

  return (
    <div className="bg-white text-gray-800">
      {/* Hero com imagem e sobreposição */}
      <section className="mt-20 bg-cyan-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Inovação com Propósito: <br></br><span className="text-cyan-400">GEO Pulse</span>
          </h1>
          <p className="text-lg text-gray-100 md:text-xl">
            Soluções inteligentes para emergências humanitárias, com tecnologia, empatia e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-cyan-600 mb-12">Como Atuamos</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-cyan-50 p-6 rounded-2xl shadow-md shadow-cyan-200 hover:shadow-xl transition">
            <FaRobot className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automação Inteligente</h3>
            <p>
              Drones, IA e sensores atuam juntos para mapear e responder a crises com agilidade e precisão em tempo real.
            </p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-300 shadow-md shadow-cyan-200 hover:shadow-xl transition">
            <FaLeaf className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consciência Ecológica</h3>
            <p>
              Priorizamos materiais recicláveis, energia solar, satélites e práticas sustentáveis em toda a cadeia de inovação.
            </p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-2xl shadow-md shadow-cyan-200 hover:shadow-xl transition">
            <FaHandsHelping className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impacto Social Real</h3>
            <p>
              Ajudamos as pessoas a se protegerem com soluções tecnológicas centradas no ser humano.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco com frase de impacto */}
      <section className="bg-cyan-600 text-white py-16 text-center px-6">
        <GiTechnoHeart className="mx-auto text-6xl mb-6" />
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          A tecnologia a serviço da vida
        </h3>
        <p className="text-lg max-w-3xl mx-auto">
          Unimos inovação, sustentabilidade e responsabilidade social para transformar realidades com dignidade e eficiência.
        </p>
      </section>

      {/* Nova Seção: Últimas Atualizações e Funcionalidades */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-center text-3xl font-bold text-purple-600 mb-12 flex items-center justify-center">
          <FaRegNewspaper className="mr-3 text-purple-600" /> Últimas Atualizações do Projeto
        </h2>

        {loadingUpdates && (
          <p className="text-center text-gray-600">Carregando atualizações...</p>
        )}

        {errorUpdates && (
          <p className="text-center text-red-600">{errorUpdates}</p>
        )}

        {!loadingUpdates && !errorUpdates && updates.length === 0 && (
          <p className="text-center text-gray-600">Nenhuma atualização disponível ainda.</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {updates.map((update) => (
            <div key={update.id} className="bg-purple-50 p-6 rounded-lg shadow-md shadow-purple-200 hover:shadow-xl transition flex flex-col">
              <img
                src={update.imagemUrl}
                alt={update.titulo}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{update.titulo}</h3>
              <p className="text-gray-700 text-sm flex-grow">{update.descricao}</p>
              <p className="text-gray-500 text-xs mt-3">
                Adicionado em: {new Date(update.data).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 px-6 lg:px-20 text-center">
        <h4 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-6">Nossa Missão</h4>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Desenvolver soluções tecnológicas que respeitam o planeta e colocam o ser humano no centro das decisões, promovendo resiliência, inclusão e esperança.
        </p>
      </section>

      {/* CTA Final */}
      <section className="bg-cyan-50 py-16 px-6 lg:px-20 text-center">
        <h4 className="text-3xl font-bold text-cyan-800 mb-4">
          Faça parte da transformação
        </h4>
        <p className="text-md md:text-lg mb-6 max-w-2xl mx-auto text-gray-700">
          Juntos podemos levar soluções inovadoras para quem mais precisa. A sua participação pode salvar vidas.
        </p>
        <a href="https://github.com/GrupoCodeNexus">
          <button className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition hover:cursor-pointer">
            Quero contribuir
          </button>
        </a>
      </section>
    </div>
  )
}

import { useState } from "react"
import { FaUserPlus, FaRegNewspaper, FaImage, FaHeading, FaBars } from "react-icons/fa" // Ícones para os novos campos

export default function Cadastrar() { // Alterado de CadastrarPage para Cadastrar
  // Estados para o formulário de Cadastro de Colaborador
  const [nomeColaborador, setNomeColaborador] = useState("")
  const [emailColaborador, setEmailColaborador] = useState("")
  const [senhaColaborador, setSenhaColaborador] = useState("")
  const [cadastroColaboradorMessage, setCadastroColaboradorMessage] = useState("")
  const [cadastroColaboradorError, setCadastroColaboradorError] = useState("")
  const [loadingColaborador, setLoadingColaborador] = useState(false)

  // Estados para o formulário de Adicionar Atualização
  const [tituloAtualizacao, setTituloAtualizacao] = useState("")
  const [descricaoAtualizacao, setDescricaoAtualizacao] = useState("")
  const [imagemUrlAtualizacao, setImagemUrlAtualizacao] = useState("")
  const [atualizacaoMessage, setAtualizacaoMessage] = useState("")
  const [atualizacaoError, setAtualizacaoError] = useState("")
  const [loadingAtualizacao, setLoadingAtualizacao] = useState(false)

  // Função para lidar com o envio do formulário de Cadastro de Colaborador
  const handleCadastroColaboradorSubmit = async (e) => {
    e.preventDefault()
    setCadastroColaboradorMessage("")
    setCadastroColaboradorError("")
    setLoadingColaborador(true)

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeColaborador,
          email: emailColaborador,
          senha: senhaColaborador,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setCadastroColaboradorMessage(data.message)
        setNomeColaborador("")
        setEmailColaborador("")
        setSenhaColaborador("")
      } else {
        setCadastroColaboradorError(data.message || "Erro ao cadastrar colaborador.")
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor para cadastro:", error)
      setCadastroColaboradorError("Não foi possível conectar ao servidor. Tente novamente.")
    } finally {
      setLoadingColaborador(false)
    }
  }

  // Função para lidar com o envio do formulário de Adicionar Atualização
  const handleAdicionarAtualizacaoSubmit = async (e) => {
    e.preventDefault()
    setAtualizacaoMessage("")
    setAtualizacaoError("")
    setLoadingAtualizacao(true)

    try {
      const response = await fetch("http://localhost:3000/updates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: tituloAtualizacao,
          descricao: descricaoAtualizacao,
          imagemUrl: imagemUrlAtualizacao,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setAtualizacaoMessage(data.message)
        setTituloAtualizacao("")
        setDescricaoAtualizacao("")
        setImagemUrlAtualizacao("")
      } else {
        setAtualizacaoError(data.message || "Erro ao adicionar atualização.")
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor para atualização:", error)
      setAtualizacaoError("Não foi possível conectar ao servidor. Tente novamente.")
    } finally {
      setLoadingAtualizacao(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Seção de Cadastro de Novo Colaborador */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
            <FaUserPlus className="mr-3 text-blue-600" /> Cadastrar Novo Colaborador
          </h2>

          {cadastroColaboradorMessage && (
            <p className="mb-4 text-sm text-green-600 text-center">{cadastroColaboradorMessage}</p>
          )}
          {cadastroColaboradorError && (
            <p className="mb-4 text-sm text-red-600 text-center">{cadastroColaboradorError}</p>
          )}

          <form onSubmit={handleCadastroColaboradorSubmit} className="space-y-5">
            <div>
              <label htmlFor="nomeColaborador" className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input
                type="text"
                id="nomeColaborador"
                required
                placeholder="Nome do Colaborador"
                value={nomeColaborador}
                onChange={(e) => setNomeColaborador(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loadingColaborador}
              />
            </div>
            <div>
              <label htmlFor="emailColaborador" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                id="emailColaborador"
                required
                placeholder="E-mail do Colaborador"
                value={emailColaborador}
                onChange={(e) => setEmailColaborador(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loadingColaborador}
              />
            </div>
            <div>
              <label htmlFor="senhaColaborador" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="senhaColaborador"
                required
                placeholder="Senha"
                value={senhaColaborador}
                onChange={(e) => setSenhaColaborador(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loadingColaborador}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
              disabled={loadingColaborador}
            >
              {loadingColaborador ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Cadastrar Colaborador"
              )}
            </button>
          </form>
        </div>

        {/* Seção de Adicionar Últimas Atualizações e Funcionalidades */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
            <FaRegNewspaper className="mr-3 text-purple-600" /> Adicionar Atualização do Projeto
          </h2>

          {atualizacaoMessage && (
            <p className="mb-4 text-sm text-green-600 text-center">{atualizacaoMessage}</p>
          )}
          {atualizacaoError && (
            <p className="mb-4 text-sm text-red-600 text-center">{atualizacaoError}</p>
          )}

          <form onSubmit={handleAdicionarAtualizacaoSubmit} className="space-y-5">
            <div>
              <label htmlFor="tituloAtualizacao" className="block text-sm font-medium text-gray-700">Título</label>
              <input
                type="text"
                id="tituloAtualizacao"
                required
                placeholder="Título da Atualização"
                value={tituloAtualizacao}
                onChange={(e) => setTituloAtualizacao(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                disabled={loadingAtualizacao}
              />
            </div>
            <div>
              <label htmlFor="descricaoAtualizacao" className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea
                id="descricaoAtualizacao"
                required
                placeholder="Descrição detalhada da atualização"
                value={descricaoAtualizacao}
                onChange={(e) => setDescricaoAtualizacao(e.target.value)}
                rows="4"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                disabled={loadingAtualizacao}
              ></textarea>
            </div>
            <div>
              <label htmlFor="imagemUrlAtualizacao" className="block text-sm font-medium text-gray-700">URL da Imagem</label>
              <input
                type="url"
                id="imagemUrlAtualizacao"
                required
                placeholder="Ex: https://exemplo.com/imagem.png"
                value={imagemUrlAtualizacao}
                onChange={(e) => setImagemUrlAtualizacao(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                disabled={loadingAtualizacao}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition flex items-center justify-center"
              disabled={loadingAtualizacao}
            >
              {loadingAtualizacao ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Adicionar Atualização"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

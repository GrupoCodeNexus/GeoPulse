import React from 'react'

const Error = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white text-gray-800 p-4'>
      <div className='text-center'>
        <h1 className='text-8xl md:text-9xl font-extrabold text-cyan-800 mb-4'>
          404
        </h1>
        <p className='text-xl md:text-2xl font-semibold mb-6'>
          Página não encontrada
        </p>
        <p className='text-md md:text-lg text-gray-600 mb-8'>
          Parece que a página que você está procurando não existe.
        </p>
        <a 
          href="/" 
          className='px-8 py-4 rounded-full text-sm font-bold transition duration-600 ease-in-out
                       bg-gradient-to-l from-cyan-600 to-gray-400 text-white 
                       hover:from-gray-500 hover:to-cyan-700 
                       shadow-md hover:cursor-pointer hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
        >
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  )
}

export default Error
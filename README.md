# ♻️ Global Solution | Protech the Future - Turma 1ESPA

Este repositório apresenta o **site de divulgação** da nossa solução tecnológica inovadora, desenvolvida como parte do desafio **Global Solution da FIAP**. Em colaboração com a IBM, Defesa Civil de Santo André, Médicos Sem Fronteiras, INPE e Corpo de Bombeiros de São Paulo, nosso principal objetivo é **mitigar e prevenir tragédias através do monitoramento ambiental em tempo real**.

---

## Funcionalidades do Site

Nosso site de divulgação foi projetado para ser uma plataforma informativa e interativa. Como funcionalidade principal, ele inclui um sistema para **cadastro de novas atualizações do projeto**. Este sistema é suportado por um servidor backend local desenvolvido com **Node.js**.

Para gerenciar essas atualizações, criamos um **sistema de login para 'colaboradores'**. Após a autenticação, o colaborador é redirecionado para uma página de cadastros que oferece dois formulários distintos: um para a **criação de novas atualizações** sobre o projeto e outro para o **registro de novos colaboradores**.

#### 🔗 Link do repositório do projeto principal: [GeoPulse - Solução de Monitoramento](https://github.com/GrupoCodeNexus/GeoPulse)

---

## Tecnologias Utilizadas

Para construir este site, utilizamos as seguintes tecnologias:

* [**React + Vite:**](https://vitejs.dev/guide/) Ferramentas para construir interfaces de usuário rápidas e eficientes.
* [**Tailwind CSS:**](https://tailwindcss.com/docs/installation/using-vite) Para a estilização e responsividade do site
* [**Node.js:**](https://nodejs.org/pt) Para a criação do nosso servidor backend local, que gerencia o sistema de cadastro de atualizações e colaboradores.

---

## Como Instalar e Rodar o Projeto Localmente?

Para que você possa explorar todas as funcionalidades do nosso site, siga os passos abaixo:

### Pré-requisito:

* Certifique-se de ter o **[Node.js](https://nodejs.org/pt)** instalado em sua máquina.

Você pode verificar a versão do Node.js instalada abrindo seu terminal e digitando:

```bash
node --version # Para verificar a versão do Node.js
```

__1.__ Clone e acesso o projeto com:

```bash
git clone <link do repositório>
cd <nome da pasta do projeto>
```

__2.__ ***Acesso á páginca localmente:*** Na raiz do projeto, rode o comando `npm install` para realizar a instalação do pacote `node_modules`.

```bash
npm install
```

__3.__ Na sequência, rode o comando para colocar em funcionamento o servidor local

```bash
npm run dev
```

***Obs:*** Após isso a acesse o link de acesso (``localhost:``) que aparecerá no terminal 


### ***Rodando o servidor NODE.js:***
__4.__ Para rodar o servidor é necessario acessar a pasta `backend`, instalar as suas dependências e rodar o `node.js`:

```bash
cd backend      # Acesso a pasta backend
npm install     # Instala as dependências    
node sever.js   # Rodar o servidor na Porta 3000
```

---

### **Login** _Área do colaborador_

**Pré-requisito:* Servidor backend ``NODE.js`` rodando!*

Para acessar a página do colaborador utilize o acesso de ``email`` e ``senha`` abaixo:

**Email:**
```
dev@gmail.com
```
**Senha:**
````
1234
````

---

## 👨🏽‍💻 Membros do Grupo - **Code Nexus**:
- [**Francisco Vargas**](https://github.com/Franciscov25) - RM560322
- [**Matheus Ikeda**](https://github.com/Matheus-Eiki) - RM559483
- [**Kayque Carvalho**](https://github.com/Kay-Carv) - RM561189
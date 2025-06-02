const express =require("express") //import modulo express. Framework web Node.js usado para criar aplicativos web e APIs de forma rápida
const cors =require("cors") // módulo cors (Cross-Origin Resource Sharing). O CORS é um mecanismo de segurança do navegador
const bodyParser = require("body-parser")  //é um middleware que analisa os corpos das requisições HTTP de entrada (como dados de formulário ou JSON) e os torna acessíveis através de req.body
const {v4:uuid} =require("uuid") // Importando uuid //A função v4 é responsável por gerar IDs universais únicos (UUIDs) 
// const multer = require("multer"); // Para lidar com o upload de arquivos
const path = require("path"); // Para lidar com caminhos de arquivos
const fs = require('fs').promises; // Para operações assíncronas com o sistema de arquivos

const app = express();

// Porta de acesso do servidor
const Port = 3000;

app.use(cors()); //o servidor backend em diferentes dominios
app.use(express.json()); //para ler arquivos json

// Estrutura de acesso/Login do usuário no sistema (Ainda não finalizado) 

// Rota de login com POSt para receber inputs
app.post('/login', async (req, res) => {
    try{
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são obrigatórios."})
        }
        // Constroi o caminho do arquivo JSON
        const usersFilePath = path.join(__dirname, 'data', 'users.json');

        // Ler o arquivo
        const userData = await fs.readFile(usersFilePath, 'utf8'); // utf8=codificação em bits dos caracteres
        const users = JSON.parse(userData); //Converte em JSON para objeto em JS
        const user = user.find( u => u.email === email && u.senha === senha) //procura email e senha

        if (user) {
            res.status(200).json({ message: "Login bem sucedido", user: { nome: user.nome, email: user.nome }})
        } else {
            res.status(401).json({ message: "Email ou senha incorretos."})
        }

    }catch (error){
        if (error.code === 'ENOENT' ) {
            console.error("Erro: Arquivo user.json não encontrado", error);
            return res.status(500).json({message: "Erro interno no Servidor: Arquivo de usuário não encontrado."})
        }
        console.error("Erro ao processar login: ", error);
        res.status(500).json({ message: "Erro interno do servidor ao processar o login. "})
    }
})

// // Get-Buscar usuários
// app.get('/login', async(req, res) =>{
//     try{
//         const file = path.join(__dirname, 'data','users.json');
//     } catch (error) {
//         console.log("Erro ao procurar usuários", error)
//         res.status(500).json({message:"Erro ao buscar usuários"})
//     }
// })

// Rodar o servidor
app.listen(Port, () =>{
    console.log(`Servidor rodadando na porta ${Port}`)
})
const express =require("express") //import modulo express. Framework web Node.js usado para criar aplicativos web e APIs de forma rápida
const cors =require("cors") // módulo cors (Cross-Origin Resource Sharing). O CORS é um mecanismo de segurança do navegador
const bodyParser = require("body-parser") //é um middleware que analisa os corpos das requisições HTTP de entrada (como dados de formulário ou JSON) e os torna acessíveis através de req.body
const {v4:uuid} =require("uuid") // Importando uuid //A função v4 é responsável por gerar IDs universais únicos (UUIDs) 
// const multer = require("multer"); // Para lidar com o upload de arquivos
const path = require("path"); // Para lidar com caminhos de arquivos
const fs = require('fs').promises; // Para operações assíncronas com o sistema de arquivos

const app = express();

// Porta de acesso do servidor
const Port = 3000;

app.use(cors()); //o servidor backend em diferentes dominios
app.use(express.json()); //para ler arquivos json

// --- Caminhos dos arquivos de dados ---
const usersFilePath = path.join(__dirname, 'data', 'users.json');
const updatesFilePath = path.join(__dirname, 'data', 'updates.json');

// Função auxiliar para garantir que o arquivo JSON exista e tenha um array vazio
const ensureFileExists = async (filePath, defaultContent = '[]') => {
    try {
        await fs.access(filePath) // Tenta acessar o arquivo
    } catch (error) {
        if (error.code === 'ENOENT') { // Se o arquivo não existe
            await fs.writeFile(filePath, defaultContent, 'utf8') // Cria o arquivo com conteúdo padrão
            console.log(`Arquivo criado: ${filePath}`)
        } else {
            throw error // Outros erros de acesso são relançados
        }
    }
}

// Middleware para garantir que os arquivos JSON existam antes de qualquer rota
app.use(async (req, res, next) => {
    try {
        await ensureFileExists(usersFilePath)
        await ensureFileExists(updatesFilePath)
        next() // Continua para a próxima middleware/rota
    } catch (error) {
        console.error("Erro ao garantir a existência dos arquivos JSON:", error)
        res.status(500).json({ message: "Erro interno do servidor ao iniciar." })
    }
})

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
        const user = users.find( u => u.email === email && u.senha === senha) //procura email e senha

        if (user) {
            res.status(200).json({ message: "Login bem sucedido", user: { nome: user.nome, email: user.nome }})
        } else {
            res.status(401).json({ message: "Email ou senha incorretos."})
        }

    }catch (error){
        if (error.code === 'ENOENT' ) {
            console.error("Erro: Arquivo users.json não encontrado", error);
            return res.status(500).json({message: "Erro interno no Servidor: Arquivo de usuário não encontrado."})
        }
        console.error("Erro ao processar login: ", error);
        res.status(500).json({ message: "Erro interno do servidor ao processar o login. "})
    }
})

// --- Nova Rota: Cadastrar Novo Colaborador ---
app.post('/register', async (req, res) => {
    try {
        const { nome, email, senha } = req.body

        // Validação básica
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: "Nome, email e senha são obrigatórios para o cadastro." })
        }

        const usersData = await fs.readFile(usersFilePath, 'utf8')
        const users = JSON.parse(usersData)

        // Verifica se o email já existe
        if (users.some(u => u.email === email)) {
            return res.status(409).json({ message: "Este email já está cadastrado." }) // 409 Conflict
        }

        const newUser = {
            id: uuid(), // Gera um ID único para o novo usuário
            nome,
            email,
            senha // Em um ambiente de produção, a senha deve ser hasheada!
        }

        users.push(newUser) // Adiciona o novo usuário ao array
        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8') // Salva o array atualizado no arquivo

        res.status(201).json({ message: "Colaborador cadastrado com sucesso!", user: { id: newUser.id, nome: newUser.nome, email: newUser.email } }) // 201 Created

    } catch (error) {
        console.error("Erro ao cadastrar novo colaborador:", error)
        res.status(500).json({ message: "Erro interno do servidor ao cadastrar colaborador." })
    }
})

// --- Novas Rotas: Gerenciar Últimas Atualizações e Funcionalidades ---

// GET: Buscar todas as atualizações
app.get('/updates', async (req, res) => {
    try {
        const updatesData = await fs.readFile(updatesFilePath, 'utf8')
        const updates = JSON.parse(updatesData)
        res.status(200).json(updates)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error("Erro: Arquivo updates.json não encontrado (deveria ter sido criado).", error)
            return res.status(200).json([]) // Retorna array vazio se o arquivo não existe, sem erro para o cliente
        }
        console.error("Erro ao buscar atualizações:", error)
        res.status(500).json({ message: "Erro interno do servidor ao buscar atualizações." })
    }
})

// POST: Adicionar uma nova atualização
app.post('/updates', async (req, res) => {
    try {
        const { titulo, descricao, imagemUrl } = req.body

        // Validação básica
        if (!titulo || !descricao || !imagemUrl) {
            return res.status(400).json({ message: "Título, descrição e URL da imagem são obrigatórios para a atualização." })
        }

        const updatesData = await fs.readFile(updatesFilePath, 'utf8')
        const updates = JSON.parse(updatesData)

        const newUpdate = {
            id: uuid(), // Gera um ID único
            titulo,
            descricao,
            imagemUrl,
            data: new Date().toISOString() // Adiciona um timestamp
        }

        updates.unshift(newUpdate) // Adiciona a nova atualização no início do array (para aparecer primeiro)
        await fs.writeFile(updatesFilePath, JSON.stringify(updates, null, 2), 'utf8')

        res.status(201).json({ message: "Atualização adicionada com sucesso!", update: newUpdate })

    } catch (error) {
        console.error("Erro ao adicionar nova atualização:", error)
        res.status(500).json({ message: "Erro interno do servidor ao adicionar atualização." })
    }
})

// Rodar o servidor
app.listen(Port, () =>{
    console.log(`Servidor rodadando na porta ${Port}`)
})
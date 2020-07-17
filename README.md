                    Semana Omnistack
O Back - end é a base da aplicação. É a estrutura de organização, regras de negocios, armazenamento de informacao,  da sua aplicação. Funcionando como um servidor que serve ao possível cliente, usuário; uma base completa para o consomo da aplicação.
Este cliente, faz interacoes com o servidor e a aplicação acontece. 

Este Cliente, é conhecido como Frontend. A parte visual da nossa aplicacao que poderá ser em Interface web, o navegador. E mobile, o aplicativo.

Nesta aplicação utilizamos tecnologias que rodeiam o JavaScript, e a linguagem de programação Javascript. Uma aplicação completa; com o ***Back-end*, Front-end interface web e mobile;** Baseadas todas camadas na linguagem de programação Javascript. E 3 tecnologias baseadas na linguagem javascript: Node.JS, ReactJS, React Native.

O Node.JS, é uma engine de javascript, que executa o javascript fora do navegador. 

Possibilitando a construção da parte Back-end, a base da nossa aplicação; utilizando o javascipt. 

O React.JS é uma biblioteca javascript para cirar interfaces de usuario, permite a criação de aplicações no formato SPA ( Single Page Application) .

O ReactNative é uma biblioteca javascript para criar aplicativos nativos usando o React. Nesta aplicacao vamos usar o expo, um conjunto de ferramentas e serviços criados em torno do reactnative que ajuda a desenvolver, criar, implatar e iterar rapidamente em multiplataforma. 

***A criação do Back-end da aplicação: NodeJS e Express***

utilizando o node, voce tem acesso é biblioteca Express, onde sera instanciado uma constante recebendo, importando o modulo express na nossa aplicacao.

- Node.js & Express
    - Rotas e Recurso - A Rota é o conjunto completo do endereço ex.: localhost:3333/users, o recurso é o que vem depois da ex.:users.
    - Métodos HTTP -  
    GET: busca uma informação no back-end
    POST: cria uma informação no back-end
    PUT: altera uma informação no back-end
    DELETE: deleta uma informação no back-end
    - Tipos de parâmetros

        Query Params: Parametros nomeados enviados na rota após "?"
        para acessar os parametros vindo do query vamos usar o request.query. 
        Route Params: Parametros utilizados para identificar recursos
        para acessar os parametros vindo do route vamos usar o request.params
        Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
        para acessar os parametros vindo do body vamos usar o request.body

- Foi utilizado o banco de dados SQL, usando a estrategia query builder, escrevendo nossas query utilizando o JavaScript. Vamos usar o quey builder KNEX.JS.
- Modulo de segurança CORS: Este modulo determina quem podera acessar nossa aplicacao.

**Construindo a interface Web** 

utilizando o react, vamos construir nosso frontend interface web da nossa aplicacao.

- Conceitos do React
    - Componente
    Uma função que retorna HTML
    - JSX
    HTML está escrito dentro do JavaScript
    - Propriedades
    As propriedades no react tem a mesma sintaxe de atributos, porem sao atributos repassados para componentes ao invez de elementos do HTML
    - Estado
    O estado toda vez que for alterado, o componente vai renderizar novamente exibindo novas informacoes em tela. Usando estado no codigo, importamos o useState. [valor, setValor]
    - Imutabilidade
    Nao podemos alterar o valor do estado de uma forma direta, nos precisamos sobrepor o valor da variavel do estado. [valor, setValor]
- Conectando aplicação à API
    - Instalar no nosso projeto um cliente HTTP para conseguir realizar as chamadas à nossa API do backend e obter as respostas. 
    Utilizamos o AXIOS. 
    importamos o axios, criamos uma variavel api que recebe axios.create onde passamos um parametro chamado baseURL que é a parte da url que vai ser mantida entre todas as chamadas. e exportamos api.

**Desenvolvendo o app mobile**

utilizando o reactnative, vamos construir nosso app mobile da aplicação

- Expo
Instalamos o expo
npm install -g expo-cli
Criando o projeto com expo 
expo init mobile
- Diferenças para o ReactJS
    - Elementos HTML
    No react native os elementos não tem semantica como na web
    Estilização sempre preciso chamar a tag style e ela vai receber um objeto com a estilizacao
    Flexbox todos elementos do reactnative ja tem display flex por padrao
    As propriedades sao usados no estilo camelCase, e os valores que nao sao numeros precisa de aspas por envolta.
    No react native não temos herança de estilo
    A estilização deve ser propria por elemento
    - Conexão com a API
    npm install axios
    Instalamos o axios que vai ser o cliente http que vai ser responsavel por fazer chamadas à API e trazer resultados la de dentro  
    importamos o axios,
    criamos uma variavel chamada api que recebe axios.create, a propriedade baseURL precisa ser o ip da sua maquina, para acessar a api.

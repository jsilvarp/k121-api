## K121

NodeJS Based API Server

---

### Tecnologias e módulos

 * [NodeJS](http://nodejs.org)
 * [MongoDB na nuvem](https://www.mongodb.com/) ([MongoAtlas](http://cloud.mongodb.com))
 * [Express](http://expressjs.com)
 * [MochaJS](https://mochajs.org/)
 * [Sendmail](https://github.com/guileen/node-sendmail)
 * [APIDoc](http://apidocjs.com/)
 * [ES6](http://es6-features.org/)
 * [BabelJS](https://babeljs.io/)
 * [Nodemon](https://nodemon.io/)

### Documentação API
[https://k121-app.herokuapp.com/docs](https://k121-app.herokuapp.com/docs)

### Demo
[https://k121-api.herokuapp.com](https://k121-api.herokuapp.com)

### Instalação

	git clone https://github.com/jpauloeti/k121.git
    cd k121/backend
    npm install

---

### Iniciar Server

	npm start
---
    
### Testes

#### - Unitário
	npm run test-unit

---
### Gerar documentação da API
Será criado um diretório chamado `apidoc` dentro de `./public`

	npm install -g apidoc

	npm run docs

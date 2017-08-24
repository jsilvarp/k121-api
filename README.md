## K121

NodeJS Based API Server

---

### Tecnologias

 * [NodeJS](http://nodejs.org)
 * [MongoDB na nuvem](https://www.mongodb.com/) ([MongoAtlas](http://cloud.mongodb.com))
 * [Express](http://expressjs.com)


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

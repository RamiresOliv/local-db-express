<h1 align="center">Local Datastorage Express</h1>
<img href="./background.png" align="center">

<br>
A simple, fast and easy datastorage system :D

Modulo na [https://www.npmjs.com](https://www.npmjs.com) Repo [npm package](https://www.npmjs.com/package/local_db_express)

A documentação sobre a LDE está em PT-BR. Menos o modulo.

## Instalação:

```sh
$ npm install local_db_express
```

## Documentação

Mais informações sobre a LDE está em [LDE-Docs](https://gabriel-ramires-de-oliveira.gitbook.io/local-datastorage-express-documentations/)
A documentação sobre a LDE está em PT-BR

## Exemplo de chamagem:

```js
const datastorage = require("local_db_express"); // chamando o modulo...

const db = new datastorage(); // Criando uma db com todas as funções
console.log(db.mapAll()); // Print db maping.
```

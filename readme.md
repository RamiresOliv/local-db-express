<h1 align="center">Local Datastorage Express</h1>

A simple, fast and easy datastorage system :D

Agora a LDE ta de novo nome! "local-db-express"

Modulo [npm package](https://www.npmjs.com/package/local-db-express)

Repositório [GitHub Repo](https://github.com/RamiresOliv/local-db-express)

## Instalação:

```sh
$ npm install local-db-express
```

## Documentação

Mais informações sobre a LDE está em [LDE-Docs](https://gabriel-ramires-de-oliveira.gitbook.io/local-db-express-docs)
A documentação sobre a LDE está em PT-BR

## Exemplo de chamagem:

```js
const datastorage = require("local-db-express"); // chamando o modulo...

datastorage.mapAll().then((result) => {
  console.log(result); // Print db maping.
});
```

<img src="background.png" align="center">

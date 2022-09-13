// exemple script starts
const datastorage = require("./src/main"); // calling

datastorage.collection.create("my_collection");

const document = {
  name: "Gabriel Ramires",
  about: "Hello! I am Ramires and i am programmer!",
  age: 13,
  infos: {
    Donator: true,
    insignias: ["Programmer", "Player"],
  },
};

datastorage.document
  .add("my_collection", "cool_document", document)
  .then((result) => {
    console.log(result);
    //console.log(result.document)
  });

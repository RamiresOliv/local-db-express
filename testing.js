// exemple script starts
const datastorage = require("./src/main"); // calling

// Runs in a async function. Because the awaits.. Responses.
async function run(my_string_value) {
  const documentName = "my_document";

  const new_collection_name = await datastorage.collection.create(
    "my_collection"
  );
  // new_collection returns the collection name! (when created.)

  const added_document = await datastorage.document.add(
    new_collection_name,
    documentName,
    {
      tip: "you can put json arrays or just a little string.",
      info: my_string_value,
    }
  ); // TIP: if you want in the "new_collection_name" you can just put the collection normal name. EX: "my_collection"

  const getted_document = await datastorage.document.get(
    new_collection_name,
    documentName
  );

  console.log(getted_document);
  console.log("wait...");
  setTimeout(async () => {
    console.log("Oh no!!! I forgot something!... MY NAME!!!!");
  }, 1000);

  // wait... Oh no!!! I forgot something!... MY NAME!!!!
  setTimeout(async () => {
    const updated_document = await datastorage.document.update(
      new_collection_name,
      documentName,
      function (oldData) {
        const newData = oldData; // create a new array with the oldData.

        newData.name = "RamiresOliv"; // i am added my name in.

        return newData; // and just return the new array or string. End :D
      }
    );

    console.log(updated_document);
    console.log("AUGHHHHHHH, oh.. solved! :D");
    console.log("in 30s the document and the collection will be deleted.");
    setTimeout(async () => {
      const delete_document = await datastorage.document.delete(
        new_collection_name,
        documentName
      );
      const delete_collection = await datastorage.collection.delete(
        new_collection_name
      );
      console.log("Thank you <3 bye bye!!");
    }, 30000);
  }, 2000);
}

// running :3
run("I am using LDE! Per my first time!!");
// exemple script ends

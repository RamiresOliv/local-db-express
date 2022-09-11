/* lul

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|                ██╗      ██████╗  ██████╗ █████╗ ██╗         ██████╗  █████╗ ████████╗ █████╗ ███████╗████████╗ ██████╗ ██████╗  █████╗  ██████╗ ███████╗               |
|                ██║     ██╔═══██╗██╔════╝██╔══██╗██║         ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝ ██╔════╝               |
|                ██║     ██║   ██║██║     ███████║██║         ██║  ██║███████║   ██║   ███████║███████╗   ██║   ██║   ██║██████╔╝███████║██║  ███╗█████╗                 |
|                ██║     ██║   ██║██║     ██╔══██║██║         ██║  ██║██╔══██║   ██║   ██╔══██║╚════██║   ██║   ██║   ██║██╔══██╗██╔══██║██║   ██║██╔══╝                 |
|                ███████╗╚██████╔╝╚██████╗██║  ██║███████╗    ██████╔╝██║  ██║   ██║   ██║  ██║███████║   ██║   ╚██████╔╝██║  ██║██║  ██║╚██████╔╝███████╗               |
|                ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝               |
|                                                     ███████╗██╗  ██╗██████╗ ██████╗ ███████╗███████╗███████╗                                                           |
|                                                     ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝                                                           |
|                                                     █████╗   ╚███╔╝ ██████╔╝██████╔╝█████╗  ███████╗███████╗                                                           |
|                                                     ██╔══╝   ██╔██╗ ██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║                                                           |
|                                                     ███████╗██╔╝ ██╗██║     ██║  ██║███████╗███████║███████║                                                           |
|                                                     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝                                                           |
|                                                                                                                                                                        |
|                                                    _   _  _  __  ___   _____ __  ___  _  _   _ _ ___ ___ __                                                            |
|                                                   | \_/ |/ \|  \| __| |   ) V / |   \/ \| \_/ | |   \ __/ _|                                                           |
|                                                   | \_/ |   |   ) _|  |   \\ /  |   /   | \_/ | |   / _|\_ \                                                           |
|                                                   |_| |_|_n_|__/|___| |___/|_|  |_|\\_n_|_| |_|_|_|\\___|__/                                                           |
|                                                                                                                                                                        |
|                                          _____    _    ______   __     _    _   _ ____    _____ _    ____ _____     ____                                               |
|                                         | ____|  / \  / ___\ \ / /    / \  | \ | |  _ \  |  ___/ \  / ___|_   _|  _|  _ \                                              |
|                                         |  _|   / _ \ \___ \\ V /    / _ \ |  \| | | | | | |_ / _ \ \___ \ | |   (_| | | |                                             |
|                                         | |___ / ___ \ ___) || |    / ___ \| |\  | |_| | |  _/ ___ \ ___) || |    _| |_| |                                             |
|                                         |_____/_/   \_|____/ |_|   /_/   \_|_| \_|____/  |_|/_/   \_|____/ |_|   (_|____/                                  perfecto 👌 |
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------





THIS IS A SELF MADE DATABASE system! ;D
used ONLY fs here B)

This is a cool database system. (simple)
------------------------------------------------------------------------------------------------------------

1. error codes:
Prefix:
  0 - Success;
  1 - Something don't exists;
  2 - Something already exists;
  3 - Value invalid;
  4 - Code abort;

Sub:
  11 - Collection don't exists/don't exists;
  12 - Document don't exists/don't exists;
  21 - Collection already exists/don't exists;
  22 - Document already exists/don't exists;


2. exemples:

how works?
A little and "simple" exemple:
SCRIPT MOMENT: -------------------------------------------------------------------------------
// exemple script starts
const datastorage = require("local_db_express"); // calling

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
SCRIPT END -------------------------------------------------------------------------------
*/

// Open Configurations:

// config_file_path_in_db_folder:
// Okay, this is REALLY important! It is recommended to always leave "false" Because this will make the configuration file stay in the root of the project ("./") if "false".
// But if it is already true, the configuration file will stay inside the database folder, and with that it can generate some bugs of not being able to change the name of the datatorage_folder folder.
config_file_name = "ldeConfigs.json"; // <-- Nah, does't need attention because the default config is already good.
config_file_path = "./" + config_file_name; // <-- Configuration file path. No require attention and the default config is already perfect.
add_keep_file_in_db_folder = true; // adds ONLY if doen't exists a ""!FILE!"" in the directory.
on_success_message = "Done!"; // this will affect when the action successfully executed. ehhh i not recomend to change it :l

// The default configs obj is only called if already don't exists a config.json in the db folder.
// But no panic the module creates one when ready
default_configs = {
  global: {
    datastorage_folder: "./database", // Change the db folder name here! the slash is REQUIRED! Exemple: "./<yourdDatabaseDirectory>".
  },
  exportation: {
    export_folder: "base", // Same thing happens here. but here you don't need use slash! Exemple: "<yourCollectionsDirectory>". On module started this is will be the result path: Exemple: "./database/base"
    file_type: ".db", // Exemple: ".db" or can be ".json" the result will be: "./database/base/My_Collection/Cool_Document.db"
  },
};

//                                                                                          module script starts:
//                                                                                          PLEASE NO SELL THIS.
//                                                                                       NO! no requires changes here!

// Close configs (script things for do)
const {
  mkdirSync,
  existsSync,
  writeFileSync,
  readFileSync,
  unlinkSync,
  readdirSync,
  rmdirSync,
  copyFile,
} = require("fs");

if (!existsSync(config_file_path)) {
  writeFileSync(config_file_path, JSON.stringify(default_configs));
}

const { global, exportation } = require(config_file_path);

if (!existsSync("./" + global.datastorage_folder)) {
  mkdirSync("./" + global.datastorage_folder);
}

if (
  existsSync("./" + global.datastorage_folder) &&
  config_file_path.includes(global.datastorage_folder)
) {
  writeFileSync(
    "./" + global.datastorage_folder + "/" + ".keep",
    "LDE worker directory. (Database system.)"
  );
}

if (!global) global = default_configs.global;
if (!exportation) exportation = default_configs.exportation;

exports.collection = {};
exports.document = {};

if (exportation == null) {
  throw new Error(
    "Error FATAL: Script stopped because the configuration file don't exists. Calling 'exportation' - Database script has been aborted. Please solve this error more fast possible."
  );
}
const export_folder_exists = existsSync(
  global.datastorage_folder + "/" + exportation.export_folder
);
if (!export_folder_exists) {
  mkdirSync(global.datastorage_folder + "/" + exportation.export_folder);
}

writeFileSync(
  global.datastorage_folder + "/" + exportation.export_folder + "/" + ".keep",
  "LDE Collections directory"
);

exports.mapAll = () => {
  const collections = readdirSync(
    global.datastorage_folder + "/" + exportation.export_folder,
    {
      withFileTypes: true,
    }
  )
    .filter((item) => item.isDirectory())
    .map((dirent) => dirent.name);

  const conclusion = {};

  collections.forEach((collection) => {
    conclusion[collection] = [];
    const documents = readdirSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        collection
    ).filter((item) =>
      item.endsWith("." + exportation.file_type.replace(".", ""))
    );
    console.log(documents);
    documents.forEach((doc) => {
      conclusion[collection].push(doc);
    });
  });

  return conclusion;
};

exports.collection.create = async (CollectionName = String) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    mkdirSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    );
    return CollectionName;
  } else {
    return CollectionName;
  }
};
exports.collection.delete = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    return {
      success: false,
      errcode: 21,
      effect: "Nenhum.",
      message: "Essa coleção já não existe!",
    };
  }

  const documents = readdirSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  ).filter((file) =>
    file.endsWith("." + exportation.file_type.replace(".", ""))
  );

  documents.forEach((v, i) => {
    unlinkSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName +
        "/" +
        v
    );
  });

  rmdirSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  );
  return {
    success: true,
    errcode: 0,
    effect: "A coleção foi apagada.",
    message: "Essa coleção foi deletada",
  };
};
exports.collection.clear = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }

  documents.forEach((v, i) => {
    unlinkSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName +
        "/" +
        v
    );
  });
  return {
    success: true,
    errcode: 0,
    effect: "Coleção limpa.",
    message: on_success_message,
  };
};
exports.collection._length = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }
  const documents = readdirSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  ).filter((file) =>
    file.endsWith("." + exportation.file_type.replace(".", ""))
  );
  let count = 0;
  documents.forEach((document) => {
    count = count + 1;
  });
  return count;
};
exports.collection.exists = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    return false;
  } else {
    return true;
  }
};

exports.document.add = async (Collection, classification, document) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome do documento. Ex: STRING",
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É necessário enviar junto o nome da coleção. STRING",
    };
  }
  if (typeof document != "object" || typeof document != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto uma function. STRING || OBJECT",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }
  if (
    existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection +
        "/" +
        classification +
        "." +
        exportation.file_type.replace(".", "")
    )
  ) {
    return {
      success: false,
      errcode: 21,
      effect: "Nenhum.",
      message: "Esse documento já existe!",
    };
  }
  writeFileSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      Collection +
      "/" +
      classification +
      "." +
      exportation.file_type.replace(".", ""),
    JSON.stringify(document)
  );
  return {
    success: true,
    errcode: 0,
    effect: "Documento foi criado.",
    document: document,
    collection: Collection,
    message: on_success_message,
  };
};
exports.document.get = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome do documento. STRING",
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection +
        "/" +
        classification +
        "." +
        exportation.file_type.replace(".", "")
    )
  ) {
    return {
      success: false,
      errcode: 22,
      effect: "Nenhum.",
      message: "Esse documento não existe!",
    };
  }
  const r = readFileSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      Collection +
      "/" +
      classification +
      "." +
      exportation.file_type.replace(".", "")
  );
  return {
    success: true,
    errcode: 0,
    effect: "Nenhum.",
    document: JSON.parse(r),
    collection: Collection,
    message: on_success_message,
  };
};
exports.document.update = async (Collection, classification, changer) => {
  if (typeof changer != "function") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto uma function. FUNCTION",
    };
  }
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome do documento. STRING",
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection +
        "/" +
        classification +
        "." +
        exportation.file_type.replace(".", "")
    )
  ) {
    return {
      success: false,
      errcode: 12,
      effect: "Nenhum.",
      message: "Esse documento não existe!",
    };
  }

  const r = readFileSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      Collection +
      "/" +
      classification +
      "." +
      exportation.file_type.replace(".", "")
  );

  const function_result = changer(JSON.parse(r));

  writeFileSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      Collection +
      "/" +
      classification +
      "." +
      exportation.file_type.replace(".", ""),
    JSON.stringify(function_result)
  );

  return {
    success: true,
    errcode: 0,
    effect: "O documento foi re-escrito.",
    document: function_result,
    collection: Collection,
    message: on_success_message,
  };
};
exports.document.delete = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome do documento. STRING",
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection
    )
  ) {
    return {
      success: false,
      errcode: 11,
      effect: "Nenhum.",
      message: "Essa coleção não existe!",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection +
        "/" +
        classification +
        "." +
        exportation.file_type.replace(".", "")
    )
  ) {
    return {
      success: false,
      errcode: 12,
      effect: "Nenhum.",
      message: "Esse documento já não existe!",
    };
  }
  unlinkSync(
    global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      Collection +
      "/" +
      classification +
      "." +
      exportation.file_type.replace(".", "")
  );
  return {
    success: true,
    errcode: 0,
    effect: "O documento foi deletado.",
    collection: Collection,
    message: on_success_message,
  };
};
exports.document.exists = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome do documento. STRING",
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: "Nenhum.",
      message: "É nessesario enviar junto o nome da coleção. STRING",
    };
  }
  if (
    !existsSync(
      global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        Collection +
        "/" +
        classification +
        "." +
        exportation.file_type.replace(".", "")
    )
  ) {
    return false;
  } else {
    return true;
  }
};
exports.Finish = () => {
  return true;
};
// Finished. ✌
// This is all! Thank you too mutch for use <3

// Ela é amiga da minha mulher...

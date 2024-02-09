/* cool

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


// LDE Docs: https://ramiresoliv.gitbook.io/local-db-express-docs/


THIS IS A SELF MADE DATABASE system! ;D
used ONLY fs here B)

This is a cool database system. (very, very simple!!)
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

The exemples scripts has been moveds to LDE Docs..
https://ramiresoliv.gitbook.io/local-datastorage-express-documentations/


.
.
.
.
.
.
.                                                                                                                                                                                                                                                                            */

// Open Configurations:

// project_root:
// This don't require changes! If you using this module in npm this already will works!
// But if you not using in the npm module you just will need change this to "./" ONLY! or idk
// FOLLOW THIS RULE: The result just need to be your project workspace root.
// In this case "__dirname" will say "node_modules/local_db_express" for solve this just got added "/../../../".
project_root = __dirname + "/../../../";

config_file_name = "ldeConfigs.json"; // <-- Nah, does't need attention because the default config is already good.
config_file_path = project_root + config_file_name; // <-- Configuration file path. No require attention and the default config is already perfect.
add_keep_file_in_db_folder = true; // adds ONLY if doesn't exists a file called "info" in the directory. (this is just a placehold ig: for github)

// The default configs obj will be used if don't exists a ldeConfigs.json in your workspace.
// When executed for the first time ou deletado o arquivo de confgurações a copy of the default configs is created in your workspace ;)
default_configs = {
  global: {
    datastorage_folder: "./database", // Change the db folder name here, the "./" is REQUIRED! Exemple: "./<yourdDatabaseDirectory>".
  },
  exportation: {
    export_folder: "base", // Same thing happens here. but here you don't need use slash! Exemple: "<yourCollectionsDirectory>". On module started this is will be the result path: Exemple: "./database/base"
    file_type: ".json", // Exemple: ".db" or can be ".json" the result will be: "./database/base/My_Collection/Cool_Document.json"
  },
};

const systemMessages = {
  effects: {
    // Global
    None: "None.",

    // Collection
    CollectionCleaned: "Collection has been cleaned.",
    CollectionDeleted: "The collection has been deleted.",

    // Document
    DocumentAdded: "Document has been created.",
    DocumentRewrited: "The document was re-written.",
    DocumentDeleted: "The document has been deleted.",
  },
  messages: {
    // Global
    Done: "Done.",

    // Collection
    ErrorCollectionName:
      "It is necessary to send the name of the collection together. STRING",
    ErrorCollectionAlreadyNotExists: "This collection no longer exists!",
    ErrorCollectionNotExists: "This collection does not exist!",
    CollectionDeleted: "This collection has been deleted.",

    // Document
    ErrorDocumentName:
      "It is necessary to send the name of the document along with it. STRING",
    ErrorDocumentAlreadyExists: "This document already exists!",
    ErrorDocumentAlreadyNotExists: "This document no longer exists!",
    ErrorDocumentNotExists: "This document does not exist!",
    ErrorDocumentData:
      "It is necessary to send the content of the document together. STRING || OBJECT || ARRAY",
    ErrorDocumentUpdateFunction:
      "It is necessary to send a function together. FUNCTION",
    ErrorDocumentUpdateFunctionNullReturn:
      "The function that was provided did not return any value.",
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

if (!existsSync(project_root + global.datastorage_folder)) {
  mkdirSync(project_root + global.datastorage_folder);
  writeFileSync(
    project_root + global.datastorage_folder + "/" + "info",
    "LDE worker directory. (Database system.)"
  );
}

if (!global) global = default_configs.global;
if (!exportation) exportation = default_configs.exportation;

exports.collection = {};
exports.document = {};

let CurrentCollectionName = "test";
const add = async (name, data) => {
  return await exports.document.add(CurrentCollectionName, name, data);
};
const update = async (name, data) => {
  return await exports.document.update(CurrentCollectionName, name, data);
};
const get = async (name) => {
  return await exports.document.get(CurrentCollectionName, name);
};
const del = async (name) => {
  return await exports.document.delete(CurrentCollectionName, name);
};
const exists = async (name) => {
  return await exports.document.exists(CurrentCollectionName, name);
};

if (exportation == null) {
  throw new Error(
    "Error FATAL: Script stopped because the configuration file don't exists. Calling 'exportation' - Database script has been aborted. Please solve this error more fast possible."
  );
}
if (
  !existsSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder
  )
) {
  mkdirSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder
  );
  writeFileSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      "info",
    "LDE Datastorage saves directory (Database system.)"
  );
}

// Collections workers
exports.collection.create = async (CollectionName = String) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  CurrentCollectionName = CollectionName;
  if (
    !existsSync(
      project_root +
        "/" +
        global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    mkdirSync(
      project_root +
        "/" +
        global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    );
    return {
      name: CollectionName,
      add: add,
      get: get,
      update: update,
      delete: del,
      docExists: exists,
    };
  } else {
    return {
      name: CollectionName,
      add: add,
      get: get,
      update: update,
      delete: del,
      docExists: exists,
    };
  }
};
exports.collection.delete = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionAlreadyNotExists,
    };
  }

  const documents = readdirSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  ).filter((file) =>
    file.endsWith("." + exportation.file_type.replace(".", ""))
  );

  documents.forEach((v) => {
    unlinkSync(
      project_root +
        "/" +
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
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  );
  return {
    success: true,
    errcode: 0,
    effect: systemMessages.effects.CollectionDeleted,
    message: systemMessages.messages.CollectionDeleted,
  };
};
exports.collection.clear = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }

  const documents = readdirSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  );
  documents.forEach((v, i) => {
    unlinkSync(
      project_root +
        "/" +
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
    effect: systemMessages.effects.CollectionCleaned,
    message: systemMessages.messages.Done,
    add: add,
    get: get,
    update: update,
    delete: del,
    docExists: exists,
  };
};
exports.collection._length = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }
  const documents = readdirSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder +
      "/" +
      CollectionName
  ).filter((file) =>
    file.endsWith("." + exportation.file_type.replace(".", ""))
  );
  let count = 0;
  documents.forEach(() => {
    count = count + 1;
  });
  return count;
};
exports.collection.exists = async (CollectionName) => {
  if (!CollectionName || typeof CollectionName != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
        global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        CollectionName
    )
  ) {
    return {
      exists: false,
      name: CollectionName,
      add: add,
      get: get,
      update: update,
      delete: del,
      docExists: exists,
    };
  } else {
    return {
      exists: true,
      name: CollectionName,
      add: add,
      get: get,
      update: update,
      delete: del,
      docExists: exists,
    };
  }
};

// Documents workers
exports.document.add = async (Collection, classification, document) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentName,
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !typeof document === "object" ||
    !typeof document === "array" ||
    !typeof document === "string"
  ) {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentData,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }
  if (
    existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentAlreadyExists,
    };
  }
  writeFileSync(
    project_root +
      "/" +
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
    effect: systemMessages.effects.DocumentAdded,
    document: document,
    collection: Collection,
    message: systemMessages.messages.Done,
  };
};
exports.document.get = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentName,
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentNotExists,
    };
  }
  const r = readFileSync(
    project_root +
      "/" +
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
    effect: systemMessages.effects.None,
    document: JSON.parse(r),
    collection: Collection,
    message: systemMessages.messages.Done,
  };
};
exports.document.update = async (Collection, classification, changer) => {
  if (typeof changer != "function") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentUpdateFunction,
    };
  }
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentName,
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentNotExists,
    };
  }

  const r = readFileSync(
    project_root +
      "/" +
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

  const function_result = await changer(JSON.parse(r));
  if (function_result == undefined || function_result == null) {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentUpdateFunctionNullReturn,
    };
  }
  writeFileSync(
    project_root +
      "/" +
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
    effect: systemMessages.effects.DocumentRewrited,
    document: function_result,
    collection: Collection,
    message: systemMessages.messages.Done,
  };
};
exports.document.delete = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentName,
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionNotExists,
    };
  }
  if (
    !existsSync(
      project_root +
        "/" +
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
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentAlreadyNotExists,
    };
  }
  unlinkSync(
    project_root +
      "/" +
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
    effect: systemMessages.effects.DocumentDeleted,
    collection: Collection,
    message: systemMessages.messages.Done,
  };
};
exports.document.exists = async (Collection, classification) => {
  if (!classification || typeof classification != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorDocumentName,
    };
  }
  if (!Collection || typeof Collection != "string") {
    return {
      success: false,
      errcode: 3,
      effect: systemMessages.effects.None,
      message: systemMessages.messages.ErrorCollectionName,
    };
  }

  if (
    !existsSync(
      project_root +
        "/" +
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

exports.mapAll = async () => {
  const collections = readdirSync(
    project_root +
      "/" +
      global.datastorage_folder +
      "/" +
      exportation.export_folder,
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
      project_root +
        "/" +
        global.datastorage_folder +
        "/" +
        exportation.export_folder +
        "/" +
        collection
    ).filter((item) =>
      item.endsWith("." + exportation.file_type.replace(".", ""))
    );
    documents.forEach((doc) => {
      conclusion[collection].push(doc);
    });
  });

  return conclusion;
};

exports.configFile = async () => {
  const conf_file = readFileSync(config_file_path);
  return JSON.parse(conf_file);
};

exports.finish = () => {
  return true;
};

// Finished. ✌
// This is all! Thank you too much for use <3

// LDE Docs: https://ramiresoliv.gitbook.io/local-datastorage-express-documentations/

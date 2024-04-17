//Función que guarda los datos en la base de datos
const fs = require("fs");
//Guardamos los datos en la base de datos
const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};
//Exportamos la función
module.exports = { saveToDatabase };
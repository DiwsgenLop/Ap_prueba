//Clase donde se ejecuta el servidor en el puerto 3000
const express = require("express")  //Esta libreria crea el servidor de manera expres por eso el nombre

//const v1Router = require("./v1/routes") //Version de prueba
const bodyParser = require("body-parser"); //Libreria para poder leer los datos que se mandan en el body
const v1WorkRouter = require("./v1/routes/workoutRoutes")

const app = express()
const PORT = process.env.PORT || 3000

//Eliminamos esto de este archivo (por ahora va a estar comentado), debido a que estara en el archivo v1/routes/index.js
/* Metodo get para la ruta principal
app.get("/", (req, res) => { 
    res.send("<h2>Hello world!</h2>"); 
}); 
*/

//app.use("/api/v1", v1Router); //Prueba 1
app.use(bodyParser.json()); 
app.use("/api/v1/workouts", v1WorkRouter)

//Mandamos un mensaje cuando el servidor este corriendo
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
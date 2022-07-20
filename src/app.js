import express from "express"
import Controller from "./controller/create-controller.js";

const app = express();
const port = 3000; 

app.use(express.json());

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)

})

Controller.aguardar(app);
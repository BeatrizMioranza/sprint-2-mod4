import banco from "../database/db.js";
import ModelTips from "../model/tips.js"
import Modificador from "../utils/modificadorDB.js"

class Controller {
    static aguardar = (app) => {
        app.post("/create", (req, res) => {
            const novaTips = new ModelTips(...Object.values(req.body))
            const response = Modificador.inserirDicas(novaTips);
            res.json(response)
        });

        app.get("/tips", (req, res)=>{
            res.json({
                "tips": banco.tips[parseInt(Math.random() * banco.tips.length)]
            })
        })
        
    }
}

export default Controller
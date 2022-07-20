import banco from "../database/db.js";

class Modificador{ 
    static inserirDicas(tips){
        banco.tips = [...banco.tips, tips]
        return banco.tips; 
    }
}

export default Modificador
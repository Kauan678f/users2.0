let Data = require("../models/Data")

class DataController{
    async register(request, response) {
        let {nome, data, presenca} = request.body
        try{
            let dado = await Data.register(nome, data, presenca);
            if(dado.status){
                response.status(200)
                response.json({response: dado.response})
            }else{
                response.status(400);
                response.json({err: dado.err})
            }
        }catch(err){
            response.status(400);
            response.json({err: err})
        }
    }
}

module.exports = new DataController();
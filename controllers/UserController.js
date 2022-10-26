var User = require('../models/User')

class UserController {
    async index(request, response) {
        try{
            var dados = await User.findall()
            if(dados.status) {
                if(dados.response > 0) {
                    response.status(200)
                    response.json({response: dados.response})
                }else{
                    response.status(200)
                    response.json({response: dados.response})
                }
            }else{
                response.status(500)
                response.json({err: dados.err})
            }
        }catch(err){
            response.status(500)
            response.json({err: err})
        }
    }
}

module.exports = new UserController();
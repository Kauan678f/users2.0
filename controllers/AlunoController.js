var Aluno = require('../models/Aluno')

class UserController {
    async index(request, response) {
        try{
            var dados = await Aluno.findall()
            if(dados.status) {
                if(dados.response > 0) {
                    response.status(200)
                    response.json({response: dados.response})
                }else{
                    response.status(200)
                    response.json({response: dados.response})
                }
            }else{
                response.status(400)
                response.json({err: dados.err})
            }
        }catch(err){
            response.status(400)
            response.json({err: err})
        }
    }

    async create(request, response){
        let {nome, ano} = request.body
        try{
            var dado = await Aluno.create(nome,ano);
            if(dado.status){
                response.status(200)
                response.json({response: "Tudo ok!"})
            }else{
                response.status(400)
                response.json({err: dado.err})
            }
        }catch(err){
            response.status(400)
            response.json({err: err})
        }
    }

    async findAluno(request, response) {
        try{
            let id = request.params.id
            let dado = await Aluno.findAluno(id)
            if(dado.status){
                response.status(200)
                response.json({response: dado.response})
            }else{
                response.status(400)
                response.json({err: dado.err})
            }
        }catch(err){
            response.status(400)
            response.json({err: err})
        }
    }
}

module.exports = new UserController();
let Aluno = require("./Aluno")
var knex = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

class Data{
    async register(nome, data, presenca) {
        let id = await Aluno.findId(nome);
        if(id.status){
            if(id.response[0] != undefined){
                try{
                    await knex.insert({
                        id: uuidv4(),
                        data: data,
                        presenca: presenca,
                        aluno_id: id.response[0].id
                    }).table("data")
                    return {response: "Tudo ok", status: true}
                }catch(err){
                    return {err: err, status: false}
                }
            }else{
                return {err: "Não tem nada no servidor", status: false};
            }
        }else{
            return {err: id.err, status: false}
        }
    }
}

module.exports = new Data();
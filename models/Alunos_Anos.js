var knex = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

class Alunos_Anos{
    async create(aluno_id, ano_id){
        let id = uuidv4();
        try{
            await knex.insert({aluno_id: aluno_id, ano_id: ano_id, id: id}).table("alunosanos")
            return {response: "tudo certo", status: true}
        }catch(err){
            return {err: err, status: false}
        }
    }
}

module.exports = new Alunos_Anos();
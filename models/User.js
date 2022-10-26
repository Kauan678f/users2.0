var knex = require("../database/connection");

class User {
    async findall() {
        try{
            var response = await knex.select("*").table("alunos");
            if(response.length > 0) {
                return {response: response, status: true};
            }else{
                return {response: 'alunos Não encontrados', status: true};
            }
        }catch(err){
            return {err: 'erro no servidor, tente novamente', status: false};
        }
        
    }
}

module.exports = new User();
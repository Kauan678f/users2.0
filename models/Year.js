var knex = require("../database/connection");

class Year{
    async findId(ano) {
        try{
            var response = await knex.select("id").where({ano: ano}).table("anos")
            return {response: response, status: true}
        }catch(err){
            return {err: err, status: false}
        }
    }
}

module.exports = new Year();
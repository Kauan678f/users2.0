var knex = require("../database/connection");

class User {
    async findall() {
        var response = await knex.select("*").table("user");
        return response;
    }
}

module.exports = new User();
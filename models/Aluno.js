var knex = require("../database/connection");
var Year = require("./Year")
var Alunos_Anos = require("./Alunos_Anos")
const { v4: uuidv4 } = require('uuid');
const { response } = require("express");

class User {
    async findAluno(id){
        try{
            let response = await knex.select(
                [
                    "alunos.nome as nome",
                    "data.data as data",
                    "data.presenca as presenca"
                ]
            )
            .table("alunos")
            .innerJoin("data", "data.aluno_id", "alunos.id")
            .where("alunos.id", id)
            return {response: response, status: true}
        }catch(err){
            return {err: err, status: false}
        }
    }

    async findId(nome) {
        try{
            let response = await knex.select("id")
            .table("alunos")
            .where({nome: nome})
            return {response: response, status: true}
        }catch(err){
            return {err: err, status: false}
        }
    }

    async findall() {
        try{
            let response = await knex.select([
                "alunos.id as aluno_id",
                "alunos.nome as aluno_nome",
                "anos.ano as ano"
            ]).table("alunosanos")
            .innerJoin("alunos", "alunos.id", "alunosanos.aluno_id")
            .innerJoin("anos", "anos.id", "alunosanos.ano_id")
            .orderBy("nome", "asc")
            if(response.length > 0) {
                return {response: response, status: true}
            }else{
                return {response: "Não tem nada no banco de dados", status: true}
            }
        }catch(err){
            return {err: err, status: false}
        }
    }

    

    async create(nome,ano) {
        let ano_id = await Year.findId(ano);
        let id = uuidv4();
        if(ano_id.response[0] != undefined) {
            await knex.insert({nome: nome, id: id}).table("alunos")
            try{
                await Alunos_Anos.create(id, ano_id.response[0].id)
                return {response: "tudo ok", status: true}
            }catch(err){
                return {err: err, status: false}
            }
        }else{
            console.log("oi")
            return {err: "Ano não existente no banco de dados", status: false}
        }

    }
}

module.exports = new User();
get: 

/aluno 
 caso o status for 200
  ira retornar a lista dos alunos com o id, nome e ano
   or
  "uma mensagem que não tem nada no banco" (obs: se não haver nada no banco)
  caso o status for diferente de 200
   ira retornar a mensagem de erro
   
/aluno/:id
  caso o status for 200
    ira retornar a lista dos alunos com o nome e uma lista com a data e a presnca
      or
    uma lista vazia (obs: se não haver nada no banco)
  caso o status for diferente de 200
   ira retornar a mensagem de erro
   
   post:
    /aluno
     deve passar o nome e o ano pelo corpo da requisição post
     caso o status for 200
      ira retornar uma resposta "tudo ok" {response: "tudo ok"}
     caso o status for diferente de 200
      ira retornar o erro que aconteceu {err: err}
      
      /presenca
       deve passar o nome, data(ex: 2022/03/20) e presenca(obs: P ou F)
       caso o status for 200
        ira retornar uma resposta "tudo ok" {response: "tudo ok"}
         or
        uma resposta "não tem nada no servidor" {response: "não tem nada no servidor"} (obs: se não haver nada no banco)
       caso o status for diferente de 200
        ira retornar o erro que aconteceu {err: err}

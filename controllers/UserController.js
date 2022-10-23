var User = require('../models/User')

class UserController {
    async index(request, response) {
        try{
            response.json({response: User.findall})
            response.status(200);
        }catch(err){
            response.err(err)
        }
    }
}

module.exports = new UserController();
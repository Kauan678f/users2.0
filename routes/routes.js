var express = require("express")
var app = express;
var router = app.Router();
var AlunoController = require('../controllers/AlunoController')
var DataController = require("../controllers/DataController")

router.get('/user', AlunoController.index);
router.get('/user/:id', AlunoController.findAluno);
router.post('/user', AlunoController.create);
router.post("/data", DataController.register)

module.exports = router;
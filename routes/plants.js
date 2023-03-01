var express = require('express');
var router = express.Router();
var PlantService = require("../services/PlantService")
var db = require("../models");
var plantService = new PlantService(db);

/* GET tutorials listing. */
router.get('/', async function(req, res, next) {
  const plants = await plantService.getAll();
  res.render('plants', {plants: plants});
});

module.exports = router;
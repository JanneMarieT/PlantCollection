var express = require('express');
var router = express.Router();
var PlantService = require("../services/PlantService")
var db = require("../models");
var plantService = new PlantService(db);
const { Op } = require("sequelize");

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? (page-1) * limit : 0;
  return { limit, offset };
};

/* GET tutorials listing. */
router.get('/', async function(req, res, next) {
  const { sort, name, description, possess, page, size} = req.query;
  const order = sort ? sort.split(',').map(pair => pair.split(':')) : [];
  const nameCondition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const descCondition = description ? { description: { [Op.like]: `%${description}%` } } : null;
  const possessCondition = possess ? { possess: { [Op.like]: `%${possess}%` } } : null;
  const condition = {[Op.and]: [nameCondition, descCondition, possessCondition]};
  const pagination = getPagination(page, size);
  const plants = await plantService.getAll(condition, order, pagination);
  res.render('plants', {plants: plants});
});



module.exports = router;
class PlantService {
    constructor(db) {
        this.client = db.sequelize;
        this.plants = db.plants;
    }

    async getAll(condition, order, pagination) {
        return this.plants.findAll({
            limit: pagination.limit,
            offset: pagination.offset,
            where: condition,
            order: order
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = PlantService;
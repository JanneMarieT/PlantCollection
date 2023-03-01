class PlantService {
    constructor(db) {
        this.client = db.sequelize;
        this.plants = db.plants;
    }

    async getAll() {
        return this.plants.findAll({
            where: {}
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = PlantService;
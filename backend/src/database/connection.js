const knes = require("knex");
const configuration = require("../../knexfile");


const connection = knes(configuration.development);


module.exports = connection
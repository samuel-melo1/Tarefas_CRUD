const db = require("../sequelize");
const Sequelize = require("sequelize");

const Task = dv.definte("task", {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

Task.sync();

module.exports = Task;
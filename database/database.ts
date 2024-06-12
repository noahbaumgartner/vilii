import { Sequelize } from "sequelize";

const database = new Sequelize({
    dialect: "sqlite",
    storage: "./vilii.db",
});

export default database;
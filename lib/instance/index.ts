import { Articles } from './../models/article.models';
import { Sequelize } from 'sequelize-typescript'


const db = 'articles'
const username = 'oshen'
const password = 'Oshen@1998'

const connection = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
    models: [Articles],
});

connection.authenticate()

export default connection;
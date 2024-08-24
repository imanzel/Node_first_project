const {Sequelize,DataTypes,} = require('sequelize')
const databaseConfig = require("../config/dbConfig")
const makeBlogTable = require('./blogModel')
const makeUserTable = require('./userModel')
// console.log(dbConfig.user)

const sequelize/*nayaghar*/ = new Sequelize('haha','root','',{/*database, username, password */ 
    host : 'localhost',/*natra semantic hale ni hunxa*/ 
    port : 3306,
    dialect : 'mysql',
    operatorsAliases : false,
    pool : {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})
sequelize.authenticate()
.then(()=>{
    console.log("milyo hai username ra password")
})
.catch((err)=>{
    console.log("error aayo hai",err)
})

// const db{}
// db.name = "Anjel"
// db.age = 20

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.blogs = makeBlogTable(sequelize,DataTypes)
db.sequelize.sync({force : false}).then(()=>{
    console.log("Synced done!!")
})
module.exports = db 

const mysql=require("mysql2");
console.log("is database ignored or not???")
module.exports=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"12345678",
    database:"db_breed",
});
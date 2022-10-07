const { createPool } = require('mysql');

const dbConnet = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "demo"
});

dbConnet.getConnection((error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("database connected")
    }  
})


const excuteQuery = (query, arraParms) => {
    return new Promise((resolve, reject)=>{
        try {
            dbConnet.query(query, arraParms, (error, data) => {
                if(error){
                    console.log("error ");
                    reject(error)
                }
                resolve(data);
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { excuteQuery }
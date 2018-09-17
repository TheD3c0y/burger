var connection = require("../config/connection.js");
    

var orm = {
     insert: function(data){
        connection.query(`INSERT INTO burgers (burger_name, devour) VALUES ('${data}', false)`)
    },
    
    update: function(data){
        connection.query(`UPDATE burgers SET devour="true" WHERE product_id="${data}"`);
    },
    
    showAll: function(data){
        connection.query(`SELECT burger_name from burgers`)
    }
    
}




module.exports = orm;
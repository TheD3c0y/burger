var orm = require("../config/orm");

var burger = {
    all: function(x) {
        orm.showAll("burgers", function (res){
            x(res);
        })
    },

  create: $(".submit").on('click', function(event){
        var text = `${$(".entry").val()}`;
        orm.insert(text);
        text += `<input id ="devour" value="devour" type='button'> `;
        text.appendTo($(".newBurgers"));
    }),
    
    devour: $(".devour").on('click', function(event){
        var text = event.val();
        orm.update(text);
        orm.showAte();
    })
    
}

module.exports = burger;

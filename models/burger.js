//This is where you call the ORM. You essentially create a model for each table or each query that corresponds to the ORM

const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(burgerName, cb) {
    orm.create("burger", burgerName, cb);
  },
  update: function(condition, cb) {
    orm.update("burger", condition, cb);
  }
};

module.exports = burger;

//burger.all();
// burger.create("Cheese Burger", function() {
//   console.log("Test");
// });

// burger.update("id=6", function() {
//   console.log("updated test");
// });

// burger.create("Test Burger", function() {
//   console.log("test");
// });

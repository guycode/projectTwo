var db = require("../models");

module.exports = function(app) {
  // Get all examples

    // GET route for getting all of the tasks
    app.get("/api/tasks", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.tasks.findAll({}).then(function(dbTasks) {
        // We have access to the tasks as an argument inside of the callback function
        res.json(dbTasks);
      });
    });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

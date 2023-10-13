module.exports = (express, app) => {
  const controller = require("../controllers/user.controller.js");
  const router = express.Router();

  // Select all users.
  router.get("/", controller.all);

  // Select all user emails.
  router.get("/emails", controller.allEmails);

  // Create new user
  router.post("/", controller.create);

  // Select a user by id.
  router.get("/user/:user_id", controller.get);

  // Validate a user.
  router.post("/validate", controller.validate);

  // Login a user.
  router.post("/login", controller.login);

  // Update a user.
  router.put("/user/:user_id", controller.update);

  // Delete a user.
  router.delete("/user/:user_id", controller.delete);

  // Add routes to server.
  app.use("/api/users", router);
};
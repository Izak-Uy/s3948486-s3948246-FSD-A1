module.exports = (express, app) => {
    const controller = require("../controllers/movie.controller.js");
    const router = express.Router();
    
    // Select all movies
    router.get("/", controller.all);
    // Select one movie by PK
    router.get("/:movieId", controller.getData);
      // Add routes to server.
    app.use("/api/movies", router);

}
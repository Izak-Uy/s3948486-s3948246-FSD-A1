const db = require("../database");

exports.all = async (req, res) => {
    const movies = await db.movie.findAll();
  
    res.json(movies);
  };

exports.getData = async (req, res) => {
  const movie = await db.movie.findByPk(req.params.movieId);

  const actors = await db.movieActor.findAll({
      where: {
          movieId: req.params.movieId
      },
      attributes: ['actorName'],
  })

  const sessions = await db.movieSession.findAll({
      where: {
          movieId: req.params.movieId
      },
      attributes: ['sessionTime'],
  })

  movie.dataValues.actors = actors;
  movie.dataValues.sessions = sessions;

  res.json(movie);
}
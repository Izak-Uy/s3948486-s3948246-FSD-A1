const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.user = require("./models/user.js")(db.sequelize, DataTypes);
db.post = require("./models/post.js")(db.sequelize, DataTypes);
db.movie = require("./models/movie.js")(db.sequelize, DataTypes);

// Relate post and user.
db.post.belongsTo(db.user, { foreignKey: { name: "username", allowNull: false } });

// Learn more about associations here: https://sequelize.org/master/manual/assocs.html

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  
  await seedData();
};

async function seedData() {
  const count = await db.user.count();

  // Only seed data if necessary.
  if(count > 0)
    return;

  const argon2 = require("argon2");

  let hash = await argon2.hash("Password1!", { type: argon2.argon2id });
  
  await db.user.create({
    email: "test@test.test",
    password_hash: hash,
    first_name: "aa",
  });

  // Movie Data

  const moviesData = [
    {
      movieName: "Oppenheimer",
      movieImg: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
      movieDescription: "In 1942, amid World War II, U.S. Army General Leslie Groves recruits Oppenheimer to lead the Manhattan Project to develop an atomic bomb after he gives assurances that he has no communistsympathies.",
      movieActors: [
        "Cillian Murphy",
        "Emily Blunt",
        "Matt Damon",
        "Robert Downey Jr.",
        "Florence Pugh"
      ],
      movieSessions: [
        "4:00 PM",
        "6:00 PM",
        "8:15 PM"
      ]
    },
    {
      movieName: "Barbie",
      movieImg: "https://i.ebayimg.com/images/g/evYAAOSwszlkv5z3/s-l1600.jpg",
      movieDescription: "Some wierd story about a chick and literally me, im ken, im kenough",
      movieActors: [
        "That chick from suicide squad",
        "Margot Robbie",
        "Ryan Gosling",
        "Literally me",
        "Ryan Gosling"
      ],
      movieSessions: [
        "6:00 PM",
        "8:00 PM",
        "9:30 PM"
      ]
    },
    {
      movieName: "Sharknado 2",
      movieImg: "https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg",
      movieDescription: "There's sharks, in the AIRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR. Also this is the second time this has happened",
      movieActors: [
        "Shark",
        "Jaws",
        "Bigger Jaws",
        "John Borison",
        "Aquaman"
      ],
      movieSessions: [
        "3:30 PM",
        "12:15 PM",
        "4:30 PM"
      ]
    },
    {
      movieName: "Dunkirk",
      movieImg: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg",
      movieDescription: "During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.",
      movieActors: [
        "Cillian Murphy",
        "Harry Styles",
        "Fionn Whitehead",
        "Tom Hardy",
        "Germans"
      ],
      movieSessions: [
        "6:30 PM",
        "7:15 PM",
        "8:30 PM"
      ]
    }

];

  await db.movie.create({
    movieName: "Oppenheimer",
    movieImg: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
    movieDescription: "In 1942, amid World War II, U.S. Army General Leslie Groves recruits Oppenheimer to lead the Manhattan Project to develop an atomic bomb after he gives assurances that he has no communistsympathies.",
    movieActors: [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
      "Florence Pugh"
    ],
    movieSessions: [
      "4:00 PM",
      "6:00 PM",
      "8:15 PM"
    ]
  })

  (async () => {
    try {
      for (const movie of moviesData) {
        await db.movie.create(movie);
      }
      console.log("Movies added successfully")
    } catch (e) {
      console.error('Error added Movies: ', e);
    }
  })();

}

module.exports = db;

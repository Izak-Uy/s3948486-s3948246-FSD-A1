const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const users = await db.user.findAll();


  res.json(users);
};

// Create a user in the database.
exports.create = async (req, res) => {
  console.log(req.body.password);
  const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });
  const user = await db.user.create({
    email: req.body.email,
    password_hash: hash,
    first_name: req.body.first_name,
  });

  res.json(user);
};

exports.get = async (req, res) => {
  const user = await db.user.findByPk(req.params.user_id);

  res.json(user);
};

exports.validate = async (req, res) => {
  const user = await db.user.findOne({
    where: {
      email: req.body.email
    }
  });

  if(user === null) {
    res.json({ valid: false });
    return;
  }

  const valid = await argon2.verify(user.password_hash, req.body.password);

  res.json({ valid: valid });
}

exports.login = async (req, res) => {
  const user = await db.user.findOne({
    where: {
      email: req.body.email,
    }
  });

  if(user === null) {
    res.json({ user: null, valid: false });
    return;
  }

  const valid = await argon2.verify(user.password_hash, req.body.password);

  if (!valid) {
    res.json({ user: null, valid: valid });
    return;
  }

  res.json({user: user, valid: valid});
}

exports.update = async (req, res) => {
  const user = await db.user.findByPk(req.params.user_id);

  if (req.body.new_password) {
    const hash = await argon2.hash(req.body.new_password, { type: argon2.argon2id });

    user.password_hash = hash;
  } else {
    user.password_hash = req.body.password_hash;
  }
  user.email = req.body.email;
  user.first_name = req.body.first_name;

  await user.save();

  res.json(user);
};

exports.delete = async (req, res) => {
  const user = await db.user.findByPk(req.params.user_id);

  await user.destroy();

  res.json(user);
};

exports.allEmails = async (req, res) => {
  const users = await db.user.findAll({
    attributes: ["email"]
  });

  res.json(users);
}
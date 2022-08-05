const router = require("express").Router();
const { User, validate } = require("../models/user.js");
const bcrypt = require("bcrypt");

// api/users/
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(201).send({ message: error.message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!", user: user });
    // .status(409)
    // .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully", user: user });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// api/users/
router.post("/students", async (req, res) => {
  console.log(req.body);
  const user = await new User({ ...req.body }).save();
  res.status(200).send({ message: "user added successfully", user: user });
});

router.post("/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);
  const user = await User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        ...req.body,
      },
    }
  );

  res.status(200).send({ message: "user updated successfully", user: user });
});

// api/users/
router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).send({ users: users });
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  let users;
  try {
    users = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!User) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log("hiiiiii", id);

  let product;

  try {
    console.log(id);
    product = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!product) {
    return res.status(404).json({ message: "No Product Id Found" });
  }
  return res.status(200).json({ product });
});

router.post =
  ("/:id",
  async (req, res, next) => {
    const id = req.params.id;
    const { _id, firstName, email } = req.body;
    try {
      const users = await users.findByIdAndUpdate(id, {
        $set: { firstName: firstName, email: email },
      });
      users = await users.save();
      if (!users) {
        return res.status(400).json({ message: "unable to Update by this id" });
      }
      return res.status(200).json({ users });
    } catch (err) {
      console.log(err.message);
    }
  });

module.exports = router;

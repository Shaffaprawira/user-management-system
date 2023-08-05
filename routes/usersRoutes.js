const router = require("express").Router();

const {
  getHomePage,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getHomePage);

router.post("/", postUser);

router.post("/delete", deleteUser);

router.post("/update", updateUser);

module.exports = router;

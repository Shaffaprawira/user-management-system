const { users } = require("../models/usersModel");

const getHomePage = (req, res) => {
  res.render("home", { data: users });
};

const postUser = (req, res) => {
  const inputUserName = req.body.userName;
  const inputUserEmail = req.body.userEmail;
  const inputUserAge = req.body.userAge;
  const inputUserUniqueId = req.body.userUniqueId;

  users.push({
    userName: inputUserName,
    userEmail: inputUserEmail,
    userAge: inputUserAge,
    userUniqueId: inputUserUniqueId,
  });

  res.render("home", {
    data: users,
  });
};

const deleteUser = (req, res) => {
  var requestedUserUniqueId = req.body.userUniqueId;
  var j = 0;
  users.forEach((user) => {
    j = j + 1;
    if (user.userUniqueId === requestedUserUniqueId) {
      users.splice(j - 1, 1);
    }
  });
  res.render("home", {
    data: users,
  });
};

const updateUser = (req, res) => {
  const inputUserName = req.body.userName;
  const inputUserEmail = req.body.userEmail;
  const inputUserAge = req.body.userAge;
  const inputUserUniqueId = req.body.userUniqueId;
  var j = 0;

  users.forEach((user) => {
    j = j + 1;
    if (user.userUniqueId === inputUserUniqueId) {
      user.userName = inputUserName;
      user.userEmail = inputUserEmail;
      user.userAge = inputUserAge;
    }
  });

  res.render("home", {
    data: users,
  });
};

module.exports = {
  getHomePage,
  postUser,
  deleteUser,
  updateUser
};

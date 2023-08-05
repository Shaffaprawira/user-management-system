const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoutes = require("./routes/usersRoutes");
const app = express();
app.set("view engine", "ejs");

// handle form data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3006;
app.listen(3005, (req, res) => {
  console.log(`server running on port ${PORT}`);
});

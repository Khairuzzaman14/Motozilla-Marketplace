require("dotenv").config();

const express = require("express");
const cors = require("cors");
const users = require("./routers/users");
const auth = require("./routers/auth");
const items = require("./routers/items");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/project", users);
app.use("/project", items);
app.use("/auth", auth);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

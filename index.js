const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello e-commerce");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

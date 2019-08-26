// module
const express = require("express");
const app = express();
const router = require("./router");
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}
const port = process.env.NODE_ENV === "development" ? 3000 : 3001;

app.get("/", (req, res) => {
  res.send("HOME");
});

// middleware
app.use(express.json());
app.use("/users", router);

app.use((req, res) => {
  res.status(404).send("ERROR 404");
});
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("ERROR 500");
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 작동 중입니다...!`);
});

module.exports = app;

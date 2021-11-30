const express = require("express");
const next = require("next");
const { default: router } = require("next/router");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  server.get("/", (req, res) => {
    app.render(req, res, "/");
  });
  server.get("/education", (req, res) => {
    app.render(req, res, "/Education");
  });
  server.get("/hobbies", (req, res) => {
    app.render(req, res, "/Hobbies");
  });
  server.get("/profile", (req, res) => {
    app.render(req, res, "/Profile");
  });
  server.get("/skills", (req, res) => {
    app.render(req, res, "/Skills");
  });
  server.get("/achievements", (req, res) => {
    app.render(req, res, "/Certi");
  });
  server.get("/work-experience", (req, res) => {
    app.render(req, res, "/Work");
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
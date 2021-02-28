// DEPENDENCIES;
// =============:
const Router = require("express").Router();
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
const db = require("../models");
var moment = require("moment");
moment().format();
moment().locale();

Router.get("/messages", async (req, res) => {
  try {
    const messages = await db.Message.find().lean();
    res.status(200).send(messages);
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
});

Router.post("/messages", async (req, res) => {
  try {
    const newMessage = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      created_At: moment().format(("M/D/YY, h:mma")),
    };
    const message = (await db.Message.create(newMessage)).toObject();
    res.status(201).send(message);
  }
  catch (error) {
    console.error(error);
    res.status(500).end();
  }
})



module.exports = Router;
const db = require("./db");

const addEvent = event => {
  return db("events").insert(event);
};

const findEventById = id => {
  return db("events")
    .where({ id })
    .first();
};

const findEvents = () => {
  return db("events");
};

module.exports = {
  addEvent,
  findEventById,
  findEvents
};

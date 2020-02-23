const db = require("./db");

const findEventById = id => {
  return db("events")
    .where({ id })
    .first();
};

const findEvents = () => {
  return db("events");
};

module.exports = {
  findEventById,
  findEvents
};

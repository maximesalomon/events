const db = require("./db");

const addEvent = event => {
  return db("events").insert(event)
};

const findEventById = id => {
  return db("events")
    .where({ id })
    .first();
};

const findEvents = () => {
  return db("events");
};

const deleteEvent = id => {
    return db("events").where({ id: id}).del(id)
  };

module.exports = {
  addEvent,
  findEventById,
  findEvents,
  deleteEvent
};

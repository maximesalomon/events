const db = require("./db");
const bcrypt = require("bcryptjs");

// HELPERS

// User Helpers
const register = user => {
  const hashedPassword = bcrypt.hashSync(user.password, 14);
  user.password = hashedPassword;
  return db("users").insert(user);
};

// Event Helpers
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

const updateEvent = event => {
  console.log(event);
  return db("events")
    .where({ id: event.id })
    .update(event);
};

const deleteEvent = id => {
  return db("events")
    .where({ id: id })
    .del(id);
};

// EXPORTS

module.exports = {
  register,
  addEvent,
  findEventById,
  findEvents,
  updateEvent,
  deleteEvent
};

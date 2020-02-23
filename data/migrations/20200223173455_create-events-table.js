exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", tbl => {
    tbl
      .string("id")
      .primary()
      .notNullable();
    tbl.string("name").notNullable();
    tbl.string("date")
    tbl.string("location")
    tbl.string("description")
    tbl.string("poster")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("events");
};

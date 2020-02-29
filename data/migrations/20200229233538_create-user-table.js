exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl
      .string("id")
      .primary()
      .notNullable();
    tbl.string("email").notNullable();
    tbl.string("password").notNullable();
    tbl.string("type");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(table) {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references("events.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notes");
};
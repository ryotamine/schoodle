exports.up = function(knex, Promise) {
  return knex.schema.createTable("options_date", function(table) {
    table.increments();
    table.date("date_option");
    table.time("time_option");
    table.integer("event_id").unsigned();
    table.foreign("event_id").references("events.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("options_date");
};
exports.up = function(knex, Promise) {
  return knex.schema.createTable("guests_choices", function(table) {
    table.increments();
    table.integer("event_id").unsigned();
    table.foreign("event_id").references("events.id");
    table.integer("option_date").unsigned();
    table.foreign("option_date").references("options_date.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("guests_choices");
};
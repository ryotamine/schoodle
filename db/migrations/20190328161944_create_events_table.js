exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", function(table) {
    table.increments();
    table.string("title");
    table.string("description");
    table.string("uniqueURL");
    table.string("location");
    table.integer("host_id").unsigned();
    table.foreign("host_id").references("hosts.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
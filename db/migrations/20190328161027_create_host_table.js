exports.up = function(knex, Promise) {
  return knex.schema.createTable('hosts', function(table) {
    table.increments();
    table.string('name');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hosts');
};
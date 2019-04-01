exports.up = function(knex, Promise) {
  return knex.schema.createTable('guests', function(table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.integer('guest_choice').unsigned();
    table.foreign('guest_choice').references('guests_choices.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('guests');
};
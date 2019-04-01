exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', function(table) {
   table.increments();
   table.integer('option_date_id').unsigned();
   table.foreign('option_date_id').references('options_date.id');
   table.integer('guest_choice_id').unsigned();
   table.foreign('guest_choice_id').references('guests_choices.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results');
};
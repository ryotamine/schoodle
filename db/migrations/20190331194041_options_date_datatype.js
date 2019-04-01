exports.up = function(knex, Promise) {
  return knex.schema.alterTable('options_date', function(table) {
    table.timestamp('date_option');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('options_date', function(table) {
    table.date('date_option').alter();
  });
};
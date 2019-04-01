exports.up = function(knex, Promise) {
  return knex.schema.table('options_date', function(table) {
    table.integer('votecount').notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('options_date', function(table) {
    table.dropColumn('votecount');
  });
};
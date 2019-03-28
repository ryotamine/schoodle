exports.up = function(knex, Promise) {
    return knex.schema.createTable('options_date_time', function (table) {
      table.increments();
      table.integer('date_id').unsigned();
      table.foreign('date_id').references('options_date.id');
      table.integer('time_id').unsigned();
      table.foreign('time_id').references('options_time.id');
    });     
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('options_date_time');
  };

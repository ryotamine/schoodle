exports.up = function(knex, Promise) {
    return knex.schema.createTable('options_time', function (table) {
      table.increments();
      table.time('time_option1');
      table.time('time_option2');
      table.time('time_option3');
      table.integer('date_id').unsigned();
      table.foreign('date_id').references('options_date.id');
    });     
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('options_time');
  };

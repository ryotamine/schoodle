exports.up = function(knex, Promise) {
    return knex.schema.createTable('options_date', function (table) {
      table.increments();
      table.date('date_option1');
      table.date('date_option2');
      table.date('date_option3');
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('events.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('options_date');
  };


exports.up = function(knex, Promise) {
    return knex.schema.createTable('guests_choice', function (table) {
      table.increments();
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('events.id');
      table.integer('option_date_time').unsigned();
      table.foreign('option_date_time').references('options_date_time.id');
    });     
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('guests_choice');
  };

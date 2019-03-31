
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('options_date', function(table){
        table.timestamp('date_option');
    });
    }; 
    
    exports.down = function(knex, Promise) {
     return knex.schema.alterTable('options_date', function(table){
         table.date('date_option');
     }); 
    };


    // knex.schema.alterTable('user', function(t) {
    //     t.increments().primary(); // add
    //     // drops previous default value from column, change type to string and add not nullable constraint
    //     t.string('username', 35).notNullable().alter();
    //     // drops both not null contraint and the default value
    //     t.integer('age').alter();
    //   });

    //   Marks the column as an alter / modify, instead of the default add. Note: This only works in .alterTable() and is not supported by SQlite or Amazon Redshift. Alter is not done incrementally over older column type so if you like to add notNull and keep the old default value, the alter statement must contain both .notNull().defaultTo(1).alter(). If one just tries to add .notNull().alter() the old default value will be dropped.
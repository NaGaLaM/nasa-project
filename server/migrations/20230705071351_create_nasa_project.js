/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('planets',(table)=>{
    table.string('keplerName').notNullable().unique()
  })
  .createTable('launches',(table) => {
    table.increments('flightNumber').notNullable().primary(),
    table.date('launchDate').notNullable(),
    table.string('mission').notNullable(),
    table.string('rocket').notNullable(),
    table.string('target').notNullable(),
    table.text('customers').defaultTo(['ZTM','NASA']).notNullable(),
    table.boolean('upcoming').defaultTo(true).notNullable(),
    table.boolean('success').defaultTo(true).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('planets')
  .dropTable('launches')
};

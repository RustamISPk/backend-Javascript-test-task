/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return knex.schema.createTable('uploads', (table) => {
        table.increments('id');
        table.integer('tariff_price_id');
        table.string('google_table_id', 255);
        table.foreign('tariff_price_id').references('tariff_prices.id');
        table.foreign('google_table_id').references('spreadsheets.spreadsheet_id');
    });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return knex.schema;
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return knex.schema.alterTable('tariff_prices', (table) => {
        table.dateTime('parse_date');
    });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return knex.schema.alterTable('tariff_prices', (table) => {
        table.dropColumn('parse_date');
    });
}

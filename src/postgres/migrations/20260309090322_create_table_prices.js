/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return knex.schema.createTable("tariff_prices", function (table) {
        table.increments('id');
        table.decimal('box_delivery_base', 10, 2);
        table.decimal('box_delivery_coef_expr', 10, 2);
        table.decimal('box_delivery_liter', 10, 2);
        table.decimal('box_delivery_marketplace_base', 10, 2);
        table.decimal('box_delivery_marketplace_coef_expr', 10, 2);
        table.decimal('box_delivery_marketplace_liter', 10, 2);
        table.decimal('box_storage_base', 10, 2);
        table.decimal('box_storage_coef_expr', 10, 2);
        table.decimal('box_storage_liter', 10, 2);
        table.integer('warehouse_id');
        table.foreign('warehouse_id').references('warehouses.id');
    });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return knex.schema.dropTable("tariff_prices");
}

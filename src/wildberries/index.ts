import {WildberriesRequester} from "#wildberries/wildberries/wildberries_requester.js";
import {WildberriesRequestProcessor} from "#wildberries/wildberries/wildberries_request_processor.js";
import knex from "#postgres/knex.js";
import {WarehousesWbResponseElement} from "#wildberries/interfaces/warehouse_wb_response_element.js";

await mainFunc().then(() => {
    console.log('Готово')
});

async function mainFunc() {
    const wbRequester = new WildberriesRequester();
    const wbProcessor = new WildberriesRequestProcessor();

    const request = wbRequester.request();

    const response = await wbProcessor.process(request);

    for (const element of response) {

        let warehouse = await knexGetWarehouse(element);

        if(warehouse === undefined) {
            await knexInsertWarehouse(element);
            warehouse = await knexGetWarehouse(element);
        }

        const warehouseId = warehouse.id;
        await knexInsertTariffPrices(element, warehouseId);

    }
}

async function knexGetWarehouse(element: WarehousesWbResponseElement){
    return knex('warehouses').select('*').where('warehouse_name', element.warehouseName).first();
}

async function knexInsertWarehouse(element: WarehousesWbResponseElement){
    await knex('warehouses').insert({
        'warehouse_name': element.warehouseName,
        'geo_name': element.geoName,
    });
}

async function knexInsertTariffPrices(element: WarehousesWbResponseElement, warehouseId: number){
    await knex('tariff_prices').insert({
        'box_delivery_base': element.boxDeliveryBase,
        'box_delivery_coef_expr': element.boxDeliveryBase,
        'box_delivery_liter': element.boxDeliveryBase,
        'box_delivery_marketplace_base': element.boxDeliveryBase,
        'box_delivery_marketplace_coef_expr': element.boxDeliveryBase,
        'box_delivery_marketplace_liter': element.boxDeliveryBase,
        'box_storage_base': element.boxDeliveryBase,
        'box_storage_coef_expr': element.boxDeliveryBase,
        'box_storage_liter': element.boxDeliveryBase,
        'warehouse_id': warehouseId,
        'parse_date': new Date().toISOString(),
    })
}
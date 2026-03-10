import {Logger} from "#utils/logger.js";
import {WarehousesWbResponseElement} from "#wildberries/interfaces/warehouse_wb_response_element.js";

export class WildberriesRequestProcessor {
    constructor(private logFile = 'wildberries_log') {

    }

    async process(request: Promise<Response>): Promise<Array<WarehousesWbResponseElement>> {
        return await request.then(async response => {
            const data = await response.json();
            if (!response.ok) {
                Logger.log(data.toString(), this.logFile)
            }
            return data.response.data.warehouseList ?? [];
        })
    }
}
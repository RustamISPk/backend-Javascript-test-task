import {Logger} from "#utils/logger.js";

export class WildberriesRequestProcessor {
    constructor(private logFile = 'wildberries_log') {

    }

    process(request: Promise<Response>): object {
        return request.then(async response => {
            const data = await response.json();
            if (!response.ok) {
                Logger.log(data.toString(), this.logFile)
            }
            console.log(data);
            return data;
        })
    }
}
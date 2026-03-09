import {WildberriesRequester} from "#requester/wildberries/wildberries_requester.js";
import {WildberriesRequestProcessor} from "#requester/wildberries/wildberries_request_processor.js";

async function mainFunc() {
    const wbRequester = new WildberriesRequester();
    const wbProcessor = new WildberriesRequestProcessor();

    const request = wbRequester.request();

    const response = await wbProcessor.process(request);

    console.log(response);
}
mainFunc().then();

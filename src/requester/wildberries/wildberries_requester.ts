import {RequesterInterface} from "#requester/interfaces/requester_interface.js";
import env from "#config/env/env.js";

export class WildberriesRequester implements RequesterInterface{
    private apiKey: string;
    private url: string;

    constructor() {
        this.apiKey = env.WILDBERRIES_API_KEY;
        this.url = env.WILDBERRIES_URL;
    }

    async request(): Promise<Response> {
        return fetch(this.url + `?date=${new Date().toISOString().split('T')[0]}`, {
            method: "GET",
            headers: {
                Authorization: this.apiKey,
            },
        });
    }
}
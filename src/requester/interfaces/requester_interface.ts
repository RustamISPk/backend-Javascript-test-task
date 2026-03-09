export interface RequesterInterface {
    request(): Promise<Response>;
}
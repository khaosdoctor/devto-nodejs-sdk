export interface WebhookCreateWebhookEndpoint {
    source: string;
    targetUrl: string;
    events: Array<string>;
}

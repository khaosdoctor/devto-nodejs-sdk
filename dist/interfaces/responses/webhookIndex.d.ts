export interface WebhookIndex {
    _typeOf?: string;
    id?: number;
    source?: string;
    targetUrl?: string;
    events?: Array<string>;
    createdAt?: Date;
}

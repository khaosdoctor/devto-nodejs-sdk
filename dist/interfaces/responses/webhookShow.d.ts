import { SharedUser } from './sharedUser';
export interface WebhookShow {
    _typeOf?: string;
    id?: number;
    source?: string;
    targetUrl?: string;
    events?: Array<string>;
    createdAt?: Date;
    user?: SharedUser;
}

import { SharedUser } from './sharedUser';
export interface Comment {
    _typeOf: string;
    idCode: string;
    bodyHtml: string;
    user: SharedUser;
    children: Array<Comment>;
}

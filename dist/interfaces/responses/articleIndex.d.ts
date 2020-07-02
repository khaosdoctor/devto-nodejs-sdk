import { ArticleFlareTag } from './articleFlareTag';
import { SharedOrganization } from './sharedOrganization';
import { SharedUser } from './sharedUser';
export interface ArticleIndex {
    _typeOf: string;
    id: number;
    title: string;
    description: string;
    coverImage: string;
    readablePublishDate: string;
    socialImage: string;
    tagList: Array<string>;
    tags: string;
    slug: string;
    path: string;
    url: string;
    canonicalUrl: string;
    commentsCount: number;
    positiveReactionsCount: number;
    createdAt: Date;
    editedAt: Date;
    crosspostedAt: Date;
    publishedAt: Date;
    lastCommentAt: Date;
    publishedTimestamp: Date;
    user: SharedUser;
    organization?: SharedOrganization;
    flareTag?: ArticleFlareTag;
}

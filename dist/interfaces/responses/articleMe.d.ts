import { ArticleFlareTag } from './articleFlareTag';
import { SharedOrganization } from './sharedOrganization';
import { SharedUser } from './sharedUser';
export interface ArticleMe {
    _typeOf: string;
    id: number;
    title: string;
    description: string;
    coverImage: string;
    published: boolean;
    publishedAt: Date;
    tagList: Array<string>;
    slug: string;
    path: string;
    url: string;
    canonicalUrl: string;
    commentsCount: number;
    positiveReactionsCount: number;
    pageViewsCount: number;
    publishedTimestamp: Date;
    bodyMarkdown: string;
    user: SharedUser;
    organization?: SharedOrganization;
    flareTag?: ArticleFlareTag;
}

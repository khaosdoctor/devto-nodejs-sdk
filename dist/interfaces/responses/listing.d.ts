import { ListingCategory } from './listingCategory';
import { SharedOrganization } from './sharedOrganization';
import { SharedUser } from './sharedUser';
export interface Listing {
    _typeOf: string;
    id: number;
    title: string;
    slug: string;
    bodyMarkdown: string;
    tagList: string;
    tags: Array<string>;
    category: ListingCategory;
    processedHtml: string;
    published: boolean;
    user: SharedUser;
    organization?: SharedOrganization;
}

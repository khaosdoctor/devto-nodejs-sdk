import { ListingCategory } from './listingCategory';
export interface ListingUpdateClassifiedListing {
    title?: string;
    bodyMarkdown?: string;
    category?: ListingCategory;
    tags?: Array<string>;
    tagList?: string;
    expiresAt?: Date;
    contactViaConnect?: boolean;
    location?: string;
    action?: ListingUpdateClassifiedListing.ActionEnum;
}
export declare namespace ListingUpdateClassifiedListing {
    type ActionEnum = 'bump' | 'publish' | 'unpublish';
    const ActionEnum: {
        Bump: ActionEnum;
        Publish: ActionEnum;
        Unpublish: ActionEnum;
    };
}

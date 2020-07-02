import { ListingCategory } from './listingCategory';
export interface ListingCreateClassifiedListing {
    title: string;
    bodyMarkdown: string;
    category: ListingCategory;
    tags?: Array<string>;
    tagList?: string;
    expiresAt?: Date;
    contactViaConnect?: boolean;
    location?: string;
    organizationId?: number;
    action?: ListingCreateClassifiedListing.ActionEnum;
}
export declare namespace ListingCreateClassifiedListing {
    type ActionEnum = 'draft';
    const ActionEnum: {
        Draft: "draft";
    };
}

export interface ArticleUpdateArticle {
    title?: string;
    bodyMarkdown?: string;
    published?: boolean;
    series?: string;
    mainImage?: string;
    canonicalUrl?: string;
    description?: string;
    tags?: Array<string>;
    organizationId?: number;
}

import { PageParam, CommentsQuery } from '../interfaces/parameters/shared';
import { ListArticlesQuery } from '../interfaces/parameters/ListArticlesQuery';
import { ArticleIndex, ArticleCreate, ArticleShow, ArticleUpdate, ArticleMe, ArticleVideo, Comment, Listing, ListingCreate, ListingCategory, ListingUpdate, PodcastEpisode, Tag, User, WebhookIndex, WebhookCreate, WebhookShow } from '../interfaces/responses/models';
export declare class ThePracticalDevClient {
    private readonly APIKey;
    private readonly client;
    constructor(APIKey: string);
    listArticles(query: ListArticlesQuery): Promise<import("axios").AxiosResponse<ArticleIndex[]>>;
    createArticle(payload: ArticleCreate): Promise<import("axios").AxiosResponse<ArticleShow>>;
    getArticle(id: number): Promise<import("axios").AxiosResponse<ArticleShow>>;
    updateArticle(id: number, payload: ArticleUpdate): Promise<import("axios").AxiosResponse<ArticleShow>>;
    selfArticles(query: PageParam): Promise<import("axios").AxiosResponse<ArticleMe[]>>;
    selfPublishedArticles(query: PageParam): Promise<import("axios").AxiosResponse<ArticleMe[]>>;
    selfUnpublishedArticles(query: PageParam): Promise<import("axios").AxiosResponse<ArticleMe[]>>;
    selfAllArticles(query: PageParam): Promise<import("axios").AxiosResponse<ArticleMe[]>>;
    listArticleComments(query: CommentsQuery): Promise<import("axios").AxiosResponse<ArticleVideo[]>>;
    getComment(commentId: string): Promise<import("axios").AxiosResponse<Comment[]>>;
    listListings(query: PageParam): Promise<import("axios").AxiosResponse<Listing[]>>;
    createListing(payload: ListingCreate): Promise<import("axios").AxiosResponse<Listing>>;
    getListingByCategory(category: ListingCategory, query: PageParam): Promise<import("axios").AxiosResponse<Listing[]>>;
    getListingById(listingId: string): Promise<import("axios").AxiosResponse<Listing>>;
    updateListing(payload: ListingUpdate, id: string): Promise<import("axios").AxiosResponse<ArticleShow>>;
    getPodcastEpisodes(query: PageParam): Promise<import("axios").AxiosResponse<PodcastEpisode[]>>;
    getArticleTags(query: PageParam): Promise<import("axios").AxiosResponse<Tag[]>>;
    getUserById(userId: number): Promise<import("axios").AxiosResponse<User>>;
    getUserByName(username: string): Promise<import("axios").AxiosResponse<User>>;
    getSelfInformation(): Promise<import("axios").AxiosResponse<User>>;
    getArticlesWithVideo(query: PageParam): Promise<import("axios").AxiosResponse<ArticleVideo[]>>;
    getWebhooks(): Promise<import("axios").AxiosResponse<WebhookIndex[]>>;
    createWebhook(payload: WebhookCreate): Promise<import("axios").AxiosResponse<WebhookShow>>;
    getWebhookById(id: number): Promise<import("axios").AxiosResponse<WebhookShow>>;
    deleteWebhook(id: number): Promise<import("axios").AxiosResponse<void>>;
}

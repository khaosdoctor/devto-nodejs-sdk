import axios, { AxiosInstance } from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import { PageParam, CommentsQuery } from '../interfaces/parameters/shared'
import { ListArticlesQuery } from '../interfaces/parameters/ListArticlesQuery'
import {
  ArticleIndex,
  ArticleCreate,
  ArticleShow,
  ArticleUpdate,
  ArticleMe,
  ArticleVideo,
  Comment,
  Listing,
  ListingCreate,
  ListingCategory,
  ListingUpdate,
  PodcastEpisode,
  Tag,
  User,
  WebhookIndex,
  WebhookCreate,
  WebhookShow
} from '../interfaces/responses/models'

export class ThePracticalDevClient {
  private readonly client: AxiosInstance

  constructor (private readonly APIKey: string) {
    this.client = applyCaseMiddleware(axios.create({
      baseURL: 'https://dev.to/api',
      headers: {
        'api-key': this.APIKey
      }
    }))
  }

  async listArticles (query: ListArticlesQuery) {
    return this.client.get<ArticleIndex[]>('/articles', { params: query })
  }

  async createArticle (payload: ArticleCreate) {
    return this.client.post<ArticleShow>('/articles', payload)
  }

  async getArticle (id: number) {
    return this.client.get<ArticleShow>(`/articles/${id}`)
  }

  async updateArticle (id: number, payload: ArticleUpdate) {
    return this.client.put<ArticleShow>(`/articles/${id}`, payload)
  }

  async selfArticles (query: PageParam) {
    return this.client.get<ArticleMe[]>('/articles/me', { params: query })
  }

  async selfPublishedArticles (query: PageParam) {
    return this.client.get<ArticleMe[]>('/articles/me/published', { params: query })
  }

  async selfUnpublishedArticles (query: PageParam) {
    return this.client.get<ArticleMe[]>('/articles/me/unpublished', { params: query })
  }
  async selfAllArticles (query: PageParam) {
    return this.client.get<ArticleMe[]>('/articles/me/all', { params: query })
  }

  async listArticleComments (query: CommentsQuery) {
    return this.client.get<ArticleVideo[]>('/videos', { params: query })
  }

  async getComment (commentId: string) {
    return this.client.get<Comment[]>(`/comments/${commentId}`)
  }

  async listListings (query: PageParam) {
    return this.client.get<Listing[]>(`/listings`, { params: query })
  }

  async createListing (payload: ListingCreate) {
    return this.client.post<Listing>(`/listings`, payload)
  }

  async getListingByCategory (category: ListingCategory, query: PageParam) {
    return this.client.get<Listing[]>(`/listings/category/${category}`, { params: query })
  }

  async getListingById (listingId: string) {
    return this.client.get<Listing>(`/listings/${listingId}`)
  }

  async updateListing (payload: ListingUpdate, id: string) {
    return this.client.put<ArticleShow>(`/listings/${id}`, payload)
  }

  async getPodcastEpisodes (query: PageParam) {
    return this.client.get<PodcastEpisode[]>(`/podcast_episodes`, { params: query })
  }

  async getArticleTags (query: PageParam) {
    return this.client.get<Tag[]>(`/tags`, { params: query })
  }

  async getUserById (userId: number) {
    return this.client.get<User>(`/users/${userId}`)
  }

  async getUserByName (username: string) {
    return this.client.get<User>(`/users/by_username`, { params: { url: username } })
  }

  async getSelfInformation () {
    return this.client.get<User>(`/users/me`)
  }

  async getArticlesWithVideo (query: PageParam) {
    return this.client.get<ArticleVideo[]>(`/videos`, { params: query })
  }

  async getWebhooks () {
    return this.client.get<WebhookIndex[]>(`/webhooks`)
  }

  async createWebhook (payload: WebhookCreate) {
    return this.client.post<WebhookShow>(`/webhooks`, payload)
  }

  async getWebhookById (id: number) {
    return this.client.get<WebhookShow>(`/webhooks/${id}`)
  }

  async deleteWebhook (id: number) {
    return this.client.delete<void>(`/webhooks/${id}`)
  }
}

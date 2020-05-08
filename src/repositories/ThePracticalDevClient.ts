import axios, { AxiosInstance } from 'axios'
import { ArticleIndex, ArticleCreate, ArticleShow, ArticleUpdate, ArticleMe } from '../interfaces/responses/models'
import { ListArticlesQuery } from '../interfaces/parameters/ListArticlesQuery'
import { PageParam } from '../interfaces/parameters/shared'

export class ThePracticalDevClient {
  private readonly client: AxiosInstance

  constructor (private readonly APIKey: string) {
    this.client = axios.create({
      baseURL: 'https://dev.to/api',
      headers: {
        'api-key': this.APIKey
      }
    })
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
}

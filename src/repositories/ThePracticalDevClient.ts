import axios, { AxiosInstance } from 'axios'
import { ArticleIndex } from '../interfaces/responses/models'

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
}

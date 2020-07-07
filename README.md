# devto-nodejs-sdk

> The Node.js SDK for @thepracticaldev

## Installation

Install it via your favorite package manager:

```bash
npm i devto-nodejs-sdk
```

## Usage

This is a very simple SDK tool that implements all the [Swagger specs](https://github.com/thepracticaldev/dev.to/blob/master/docs/api_v0.yml) into a Node.js client. You can instantiate the client using:

```ts
import { Client } from 'devto-nodejs-sdk'

const client = new Client('Your API Key')

const { data } = await client.getUserByName('khaosdoctor')
```

The client itself is just a proxy of the original API.

> If the API changes and you notice it, please submit an [issue](https://github.com/khaosdoctor/devto-nodejs-sdk/issues/new?title=Dev.to API has Changed) or, if you already know what changed, please submit a [PR](https://github.com/khaosdoctor/devto-nodejs-sdk/compare)

## API

All provided APIs in the [official docs](https://docs.dev.to/api/) are provided as part of the API as well, these are the translated names for these endpoints:

- `listArticles`
- `createArticle`
- `getArticle`
- `updateArticle`
- `selfArticles`
- `selfPublishedArticles`
- `selfUnpublishedArticles`
- `selfAllArticles`
- `listArticleComments`
- `getComment`
- `listListings`
- `createListing`
- `getListingByCategory`
- `getListingById`
- `updateListing`
- `getPodcastEpisodes`
- `getArticleTags`
- `getUserById`
- `getUserByName`
- `getSelfInformation`
- `getArticlesWithVideo`
- `getWebhooks`
- `createWebhook`
- `getWebhookById`
- `deleteWebhook`

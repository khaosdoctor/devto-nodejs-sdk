# devto-nodejs-sdk

> The Node.js SDK for @thepracticaldev

## Installation

Install it via your favorite package manager:

```bash
npm i devto-nodejs-sdk
```

## Usage

This is a very simple SDK tool that implements all the Swagger specs into a Node.js client. You can instantiate the client using:

```ts
import { Client } from 'devto-nodejs-sdk'

const client = new Client('Your API Key')

const response = await client.getUserByName
```

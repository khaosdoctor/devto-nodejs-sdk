"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ThePracticalDevClient {
    constructor(APIKey) {
        this.APIKey = APIKey;
        this.client = axios_1.default.create({
            baseURL: 'https://dev.to/api',
            headers: {
                'api-key': this.APIKey
            }
        });
    }
    listArticles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/articles', { params: query });
        });
    }
    createArticle(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.post('/articles', payload);
        });
    }
    getArticle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/articles/${id}`);
        });
    }
    updateArticle(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`/articles/${id}`, payload);
        });
    }
    selfArticles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/articles/me', { params: query });
        });
    }
    selfPublishedArticles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/articles/me/published', { params: query });
        });
    }
    selfUnpublishedArticles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/articles/me/unpublished', { params: query });
        });
    }
    selfAllArticles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/articles/me/all', { params: query });
        });
    }
    listArticleComments(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get('/videos', { params: query });
        });
    }
    getComment(commentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/comments/${commentId}`);
        });
    }
    listListings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/listings`, { params: query });
        });
    }
    createListing(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.post(`/listings`, payload);
        });
    }
    getListingByCategory(category, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/listings/category/${category}`, { params: query });
        });
    }
    getListingById(listingId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/listings/${listingId}`);
        });
    }
    updateListing(payload, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`/listings/${id}`, payload);
        });
    }
    getPodcastEpisodes(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/podcast_episodes`, { params: query });
        });
    }
    getArticleTags(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/tags`, { params: query });
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/users/${userId}`);
        });
    }
    getUserByName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/users/by_username`, { params: { url: username } });
        });
    }
    getSelfInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/users/me`);
        });
    }
    getArticlesWithVideo(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/videos`, { params: query });
        });
    }
    getWebhooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/webhooks`);
        });
    }
    createWebhook(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.post(`/webhooks`, payload);
        });
    }
    getWebhookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/webhooks/${id}`);
        });
    }
    deleteWebhook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.delete(`/webhooks/${id}`);
        });
    }
}
exports.ThePracticalDevClient = ThePracticalDevClient;
//# sourceMappingURL=ThePracticalDevClient.js.map
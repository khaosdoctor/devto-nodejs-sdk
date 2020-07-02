"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThePracticalDevClient_1 = require("./repositories/ThePracticalDevClient");
function Client(APIKey) {
    const client = new ThePracticalDevClient_1.ThePracticalDevClient(APIKey);
    return client;
}
exports.Client = Client;
//# sourceMappingURL=index.js.map
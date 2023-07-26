"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server_1 = __importDefault(require("./server"));
const server = new http_1.Server(server_1.default);
exports.default = (req, res) => {
    server.emit("request", req, res);
};
//# sourceMappingURL=index.js.map
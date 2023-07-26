"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getEnvVariable = (name) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} not found in process.env`);
    }
    return value;
};
const config = {
    port: parseInt(getEnvVariable("PORT")),
    sendgridApiKey: getEnvVariable("SENDGRID_API_KEY"),
    gmailPass: getEnvVariable("GMAIL_PASS"),
};
exports.default = config;
//# sourceMappingURL=config.js.map
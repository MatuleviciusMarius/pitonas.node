"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailRoute_1 = __importDefault(require("./emailRoute"));
const router = (0, express_1.Router)();
router.use("/mail", emailRoute_1.default);
router.get("/", (req, res) => res.json("Hello"));
exports.default = router;
//# sourceMappingURL=index.js.map
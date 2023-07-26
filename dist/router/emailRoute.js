"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_1 = require("../controllers/email");
const router = (0, express_1.Router)();
router.post("/code", email_1.sendCodeEmail);
exports.default = router;
//# sourceMappingURL=emailRoute.js.map
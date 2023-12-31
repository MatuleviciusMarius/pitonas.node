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
exports.sendCodeEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../util/config"));
function sendCodeEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code, emailTo, userEmail } = req.body;
        try {
            const transporter = nodemailer_1.default.createTransport({
                service: "Gmail",
                auth: {
                    user: "pitonaslt@gmail.com",
                    pass: config_1.default.gmailPass,
                },
            });
            const mailOptions = {
                from: "pitonaslt@gmail.com",
                to: emailTo,
                subject: userEmail,
                text: code,
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("Error occurred:", error);
                    res.status(500).json({ error });
                }
                else {
                    console.log("Email sent successfully!");
                    console.log("Message ID:", info.messageId);
                    console.log("Preview URL:", nodemailer_1.default.getTestMessageUrl(info));
                    res.json({ info });
                }
            });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
exports.sendCodeEmail = sendCodeEmail;
//# sourceMappingURL=email.js.map
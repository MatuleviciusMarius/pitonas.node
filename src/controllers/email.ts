import { Request, Response } from "express";
import nodemailer from "nodemailer";
import config from "../util/config";

export async function sendCodeEmail(req: Request, res: Response) {
  const { code, emailTo, userEmail } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "pitonaslt@gmail.com",
        pass: config.gmailPass,
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
      } else {
        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
        res.json({ info });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

import { Server } from "http";
import app from "./server";
import { Request, Response } from "express";

const server = new Server(app);

export default (req: Request, res: Response) => {
  server.emit("request", req, res);
};

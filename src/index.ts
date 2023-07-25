import express from "express";
import cors from "cors";
import config from "./util/config";
import router from "./router";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

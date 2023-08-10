import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "./utils/config";
import express, { Express } from "express";
import { connectToDB } from "./utils/dbConnect";
import { unknownEndpoint, requestLogger } from "./middlewares";
import { commentsRouter, productsRouter, videosRouter } from "./routes";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/comments", commentsRouter);
app.use("/api/products", productsRouter);
app.use("/api/videos", videosRouter);
app.use(unknownEndpoint);

if (process.env.NODE_ENV === "development") {
  app.use(requestLogger);
}

connectToDB(config.databaseUrl);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

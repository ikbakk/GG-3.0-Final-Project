import { Router } from "express";
import { addVideo, getAllVideos, searchVideos } from "../controllers/videos";

const videosRouter = Router();

videosRouter.get("/", getAllVideos);
videosRouter.post("/", addVideo);
videosRouter.get("/search", searchVideos);

export default videosRouter;

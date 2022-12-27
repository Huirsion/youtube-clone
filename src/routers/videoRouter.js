import express from "express";
import { watch, editVideos } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", editVideos);

export default videoRouter;
import { Router } from "express";
import {
  getVideos,
  createVideo,
  getVideo,
  deleteVideo,
} from "./videos.controller";

const router = Router();

router.get("/videos", getVideos);

router.get("/videos/:id", getVideo);

router.post("/videos", createVideo);

router.delete("/videos/:id", deleteVideo);

export default router;

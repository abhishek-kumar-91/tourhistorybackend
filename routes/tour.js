import express from "express";
const router = express.Router();

import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/tour.js";

router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

router.post("/", createTour);
router.delete("/:id",  deleteTour);
router.patch("/:id",  updateTour);
router.get("/userTours/:id", getToursByUser);
router.patch("/like/:id", likeTour);

export default router;
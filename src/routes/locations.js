import { Router } from "express";
import {
	createLocation,
	deleteLocation,
	getLocation,
	getLocationById,
	updateLocation,
} from "../controller/locations.js";

export const router = Router();

router.get("/", getLocation);
router.get("/:id_location", getLocationById);

router.post("/", createLocation);

router.patch("/", updateLocation);

router.delete("/:id_location", deleteLocation);

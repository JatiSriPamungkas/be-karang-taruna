import { Router } from "express";
import {
	createLocation,
	deleteLocation,
	getAllLocation,
	getLocation,
	getLocationById,
	updateLocation,
} from "../controller/locations.js";

export const router = Router();

router.get("/", getLocation);
router.get("/all", getAllLocation);
router.get("/:id_location", getLocationById);

router.post("/", createLocation);

router.patch("/", updateLocation);

router.delete("/:id_location", deleteLocation);

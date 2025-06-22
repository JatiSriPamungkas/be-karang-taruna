import { Router } from "express";
import {
	createLocation,
	deleteLocation,
	getLocation,
	updateLocation,
} from "../controller/locations.js";

export const router = Router();

router.get("/", getLocation);

router.post("/", createLocation);

router.patch("/", updateLocation);

router.delete("/:id_location", deleteLocation);

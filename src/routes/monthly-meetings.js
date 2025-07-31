import { Router } from "express";
import {
  monthlyMeetingsDataTable,
  addMonthlyMeetings,
} from "../controller/monthly-meetings.js";

export const router = Router();

router.get("/", monthlyMeetingsDataTable);

router.post("/", addMonthlyMeetings);

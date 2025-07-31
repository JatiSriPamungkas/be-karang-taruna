import { Router } from "express";
import {
  monthlyMeetingsDataTable,
  addMonthlyMeetings,
  monthlyMeetingsById,
} from "../controller/monthly-meetings.js";

export const router = Router();

router.get("/", monthlyMeetingsDataTable);
router.get("/:id_monthly_meeting", monthlyMeetingsById);

router.post("/", addMonthlyMeetings);

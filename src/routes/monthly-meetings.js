import { Router } from "express";
import {
  monthlyMeetingsDataTable,
  addMonthlyMeetings,
  monthlyMeetingsById,
  nominalBill,
  nominalPaidByMember,
} from "../controller/monthly-meetings.js";

export const router = Router();

router.get("/", monthlyMeetingsDataTable);
router.get("/nominal-bill", nominalBill);
router.get("/nominal-paid", nominalPaidByMember);
router.get("/:id_monthly_meeting", monthlyMeetingsById);

router.post("/", addMonthlyMeetings);

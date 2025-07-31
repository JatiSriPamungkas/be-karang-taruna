import { Router } from "express";
import {
  deleteMember,
  getCredentialMember,
  getMemberById,
  getMember,
  updateMember,
  deactivateMember,
  activateMember,
  updateStatusMember,
  getActiveApprovedMember,
  getActiveApprovedMemberForMeeting,
} from "../controller/members.js";
import { createMember } from "../controller/members.js";

export const router = Router();

router.get("/", getMember);
router.get("/credentials", getCredentialMember);
router.get("/active-approved", getActiveApprovedMember);
router.get(
  "/active-approved-for-meeting-sequence/:id_monthly_meeting",
  getActiveApprovedMemberForMeeting
);
router.get("/:id_member", getMemberById);

router.post("/", createMember);

router.patch("/", updateMember);
router.patch("/deactivate/:id_member", deactivateMember);
router.patch("/activate/:id_member", activateMember);
router.patch("/status", updateStatusMember);

router.delete("/:id_member", deleteMember);

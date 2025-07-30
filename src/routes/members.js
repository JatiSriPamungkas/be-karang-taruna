import { Router } from "express";
import {
  deleteMember,
  getCredentialMember,
  getMemberById,
  getMember,
  updateMember,
  deactivateMember,
} from "../controller/members.js";
import { createMember } from "../controller/members.js";

export const router = Router();

router.get("/", getMember);
router.get("/credentials", getCredentialMember);
router.get("/:id_member", getMemberById);

router.post("/", createMember);

router.patch("/", updateMember);
router.patch("/deactivate/:id_member", deactivateMember);

router.delete("/:id_member", deleteMember);

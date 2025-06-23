import { Router } from "express";
import { getMember } from "../controller/members.js";
import { createMember } from "../controller/members.js";

export const router = Router();

router.get("/", getMember);

router.post("/", createMember);

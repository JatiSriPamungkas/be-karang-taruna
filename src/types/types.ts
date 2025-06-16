import { Request, Response } from "express";

export type RequestAndResponse = {
	req: Request;
	res: Response;
};

import {
	getLatestMonthlyContributions,
	getAllMonthlyContributions,
} from "../models/monthly-contribution";
import { RequestAndResponse } from "../types/types";

export const getLatestMonthlyContribution = async ({ req, res }: RequestAndResponse) => {
	try {
		const [data] = await getLatestMonthlyContributions();

		res.status(200).json({
			message: "GET: Success to get the latest monthly contribution!",
			data: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "GET: Failed to get the latest monthly contribution!",
		});
	}
};

export const getAllMonthlyContribution = async ({ req, res }: RequestAndResponse) => {
	try {
		const [data] = await getAllMonthlyContributions();

		res.status(200).json({
			message: "GET: Success to get all monthly contribution!",
			data: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "GET: Failed to get all monthly contribution!",
		});
	}
};

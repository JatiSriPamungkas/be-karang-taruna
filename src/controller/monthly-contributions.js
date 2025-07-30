import {
  getLatestMonthlyContributions,
  getAllMonthlyContributions,
  createMonthlyContributions,
} from "../models/monthly-contributions.js";
import dotenv from "dotenv";

dotenv.config();

export const getLatestMonthlyContribution = async (req, res) => {
  try {
    const [data] = await getLatestMonthlyContributions();

    res.status(200).json({
      message: "GET: Success to get the latest monthly contribution!",
      data: data.length > 0 ? data[0] : {},
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get the latest monthly contribution!",
      error: err,
    });
  }
};

export const getAllMonthlyContribution = async (req, res) => {
  try {
    const [data] = await getAllMonthlyContributions();

    res.status(200).json({
      message: "GET: Success to get all monthly contribution!",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get all monthly contribution!",
      error: err,
    });
  }
};

export const createMonthlyContribution = async (req, res) => {
  const { nominal, created_by } = req.body;

  try {
    await createMonthlyContributions(nominal, created_by);

    res.status(200).json({
      message: "POST: Success to create monthly contribution",
      data: {
        created_by,
        nominal,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to create monthly contribution!",
      error: err,
    });
  }
};

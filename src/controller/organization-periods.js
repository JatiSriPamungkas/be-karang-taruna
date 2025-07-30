import { getAllOrganizationPeriods } from "../models/organization-periods.js";

export const getOrganizationPeriods = async (req, res) => {
  try {
    const [ OrganizationPeriods ] = await getAllOrganizationPeriods();

    res.status(200).json({
      message: "GET: Success to get Organization Periods",
      data: OrganizationPeriods,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get Organization Periods",
      error: err,
    });
  }
};

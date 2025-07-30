import { getAllOrganizationPeriods } from "../models/organization-periods.js";

export const getOrganizationPeriods = async (req, res) => {
  try {
    const [OrganizationPeriods] = await getAllOrganizationPeriods();

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

export const submitOrganizationPeriod = async (req, res) => {
  const { start_period, end_period, description, created_by } = req.body;

  try {
    await insertOrganizationPeriod(
      start_period,
      end_period,
      description,
      created_by
    );

    res.status(200).json({
      message: "POST: Success to add new organization period",
      data: {
        start_period,
        end_period,
        description,
        created_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to add new organization period" + err,
      error: err,
    });
  }
};

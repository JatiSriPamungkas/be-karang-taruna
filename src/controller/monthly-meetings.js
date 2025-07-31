import {
  getMonthlyMeetingsDataTable,
  insertMonthlyMeeting,
  getMonthlyMeetingsById,
  getNominalBill,
  getNominalPaidByMember,
} from "../models/monthly-meetings.js";
import dotenv from "dotenv";

dotenv.config();

export const monthlyMeetingsDataTable = async (req, res) => {
  const { page, search } = req.query;
  const per_page = 10;

  try {
    // const { dataMonthlyMeetings, countMonthlyMeetings } =
    //   await getMonthlyMeetingsDataTable(per_page, Number(page), search);
    const [dataMonthlyMeetings] = await getMonthlyMeetingsDataTable(
      per_page,
      Number(page),
      search
    );

    res.status(200).json({
      message: "GET: Success to get monthly meetings",
      data: dataMonthlyMeetings,
      // meta: {
      //   page: Number(page),
      //   per_page,
      //   total_page: Math.ceil(countMonthlyMeetings / per_page),
      //   total_data: countMonthlyMeetings,
      //   search,
      // },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get monthly meetings",
      error: err,
    });
  }
};

export const monthlyMeetingsById = async (req, res) => {
  const { id_monthly_meeting } = req.params;

  try {
    const [data] = await getMonthlyMeetingsById(id_monthly_meeting);

    if (data.length > 0) {
      res.status(200).json({
        message: "GET: Success to get monthly meeting by id",
        data: data[0],
      });
    } else {
      res.status(404).json({
        message: `Not Found: Monthly meeting with id ${id_organization_position} not found!`,
        data: data[0],
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get monthly meeting by id",
      error: err,
    });
  }
};

export const addMonthlyMeetings = async (req, res) => {
  const { id_member, created_by, id_monthly_contribution } = req.body;

  try {
    const id_monthly_meeting = await insertMonthlyMeeting(
      id_member,
      created_by,
      id_monthly_contribution
    );

    res.status(200).json({
      message: "POST: Success to start monthly meetings",
      data: {
        id_monthly_meeting: id_monthly_meeting,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to start monthly meetings",
      error: err,
    });
  }
};

export const nominalBill = async (req, res) => {
  try {
    const [data] = await getNominalBill();

    res.status(200).json({
      message: "GET: Success to get nominal bill",
      data: {
        nominalBill: Number(data[0].nominalBill),
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get nominal bill",
      error: err,
    });
  }
};

export const nominalPaidByMember = async (req, res) => {
  const { id_member, id_monthly_meeting } = req.query;

  try {
    const [data] = await getNominalPaidByMember(id_member, id_monthly_meeting);

    res.status(200).json({
      message: "GET: Success to get nominal paid by member",
      data: {
        id_member: id_member,
        id_monthly_meeting: id_monthly_meeting,
        nominalPaid: Number(data[0].nominalPaid),
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get nominal paid by member",
      error: err,
    });
  }
};

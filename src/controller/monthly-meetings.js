import {
  getMonthlyMeetingsDataTable,
  insertMonthlyMeeting,
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

export const addMonthlyMeetings = async (req, res) => {
  const { id_member, created_by } = req.body;

  try {
    await insertMonthlyMeeting(id_member, created_by);

    res.status(200).json({
      message: "POST: Success to start monthly meetings",
      data: {
        id_member,
        created_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to start monthly meetings",
      error: err,
    });
  }
};

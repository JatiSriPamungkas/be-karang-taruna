import {
  createMembers,
  deleteMembers,
  getCredentialMembers,
  getMembers,
  updateMembers,
  selectMemberById,
  deactivateMemberById,
  activateMemberById,
  updateStatusMembers,
  getAllActiveApprovedMember,
  getAllActiveApprovedMemberForMeeting,
} from "../models/members.js";

export const getMember = async (req, res) => {
  const { page, search, status } = req.query;
  const per_page = 10;

  try {
    const { data, total } = await getMembers(
      per_page,
      Number(page),
      search,
      status
    );

    res.status(200).json({
      message: "GET: Success to get members",
      data: data,
      meta: {
        page: Number(page),
        per_page,
        total_page: Math.ceil(total / per_page),
        total_data: total,
        search,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get members",
      error: err,
    });
  }
};

export const getCredentialMember = async (req, res) => {
  const { email, username } = req.query;

  try {
    const [data] = await getCredentialMembers(email, username);

    res.status(200).json({
      message: "GET: Success to get credentials members",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get credentials members",
      error: err,
    });
  }
};

export const createMember = async (req, res) => {
  const {
    email,
    telephone,
    fullname,
    nickname,
    gender,
    date_of_birth,
    id_location_detail,
    username,
    password,
    created_by,
    status,
  } = req.body;

  try {
    await createMembers(
      email,
      telephone,
      fullname,
      nickname,
      gender,
      date_of_birth,
      id_location_detail,
      username,
      password,
      created_by,
      status
    );

    res.status(200).json({
      message: "POST: Success to create members",
      data: {
        email,
        telephone,
        fullname,
        nickname,
        gender,
        date_of_birth,
        id_location_detail,
        username,
        password,
        created_by,
        status,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to create members",
      error: err,
    });
  }
};

export const updateMember = async (req, res) => {
  const {
    id_member,
    email,
    telephone,
    fullname,
    nickname,
    gender,
    date_of_birth,
    id_location_detail,
    username,
    password,
    is_active,
    last_update_by,
  } = req.body;

  try {
    await updateMembers(
      id_member,
      email,
      telephone,
      fullname,
      nickname,
      gender,
      date_of_birth,
      id_location_detail,
      username,
      password,
      is_active,
      last_update_by
    );

    res.status(200).json({
      message: "PATCH: Success to update members",
      data: {
        id_member,
        email,
        telephone,
        fullname,
        nickname,
        gender,
        date_of_birth,
        id_location_detail,
        username,
        password,
        is_active,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to update members, " + err,
      error: err,
    });
  }
};

export const deleteMember = async (req, res) => {
  const { id_member } = req.params;

  try {
    await deleteMembers(id_member);

    res.status(200).json({
      message: "DELETE: Success to delete members",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "DELETE: Failed to delete members",
      error: err,
    });
  }
};

export const getMemberById = async (req, res) => {
  const { id_member } = req.params;

  try {
    const [data] = await selectMemberById(id_member);

    res.status(200).json({
      message: "GET: Success to get member by id",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get member by id",
      error: err,
    });
  }
};

export const deactivateMember = async (req, res) => {
  const { id_member } = req.params;

  try {
    const [data] = await deactivateMemberById(id_member);

    res.status(200).json({
      message: "PATCH: Success to deactivate member by id",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to deactivate member by id" + err,
      error: err,
    });
  }
};

export const activateMember = async (req, res) => {
  const { id_member } = req.params;

  try {
    const [data] = await activateMemberById(id_member);

    res.status(200).json({
      message: "PATCH: Success to activate member by id",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to activate member by id" + err,
      error: err,
    });
  }
};

export const updateStatusMember = async (req, res) => {
  const { id_member, status } = req.body;

  try {
    await updateStatusMembers(id_member, status);

    res.status(200).json({
      message: "PATCH: Success to update status members, " + status,
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to update members, " + err,
      error: err,
    });
  }
};

export const getActiveApprovedMember = async (req, res) => {
  try {
    const [data] = await getAllActiveApprovedMember();

    res.status(200).json({
      message: "GET: Success to get all active approved member",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get all active approved member",
      error: err,
    });
  }
};

export const getActiveApprovedMemberForMeeting = async (req, res) => {
  const { id_monthly_meeting } = req.params;

  try {
    const [data] = await getAllActiveApprovedMemberForMeeting(
      id_monthly_meeting
    );

    res.status(200).json({
      message: "GET: Success to get all active approved member",
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get all active approved member",
      error: err,
    });
  }
};

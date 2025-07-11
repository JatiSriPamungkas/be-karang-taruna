import {
  createMembers,
  deleteMembers,
  getCredentialMembers,
  getMembers,
  updateMembers,
  selectMemberById,
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
    status,
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
      status,
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
        status,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to update members",
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

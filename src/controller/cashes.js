import {
	createNewTransactions,
	deleteTransactions,
	getCashes,
	updateTransactions,
} from "../models/cashes.js";

export const getCash = async (req, res) => {
	const { type, page, search } = req.query;
	const per_page = 10;

	try {
		const [data] = await getCashes(type, per_page, Number(page), search);

		res.status(200).json({
			message: "GET: Success to get cashes",
			data: data,
			meta: {
				page: Number(page),
				per_page,
				total_page: Math.ceil(data.length / per_page),
				total_data: data.length,
				search,
			},
		});
	} catch (err) {
		res.status(500).json({
			message: "GET: Failed to get cashes",
			error: err,
		});
	}
};

export const createNewTransaction = async (req, res) => {
	const { type, nominal, description, created_by, last_update_by } = req.body;

	try {
		await createNewTransactions(type, nominal, description, created_by, last_update_by);

		res.status(200).json({
			message: "POST: Success to create transaction",
			data: {
				type,
				nominal,
				description,
				created_by,
				last_update_by,
			},
		});
	} catch (err) {
		res.status(500).json({
			message: "POST: Failed to create transaction",
			error: err,
		});
	}
};

export const updateTransaction = async (req, res) => {
	const { id_field, type, nominal, description, created_by, last_update_by } = req.body;

	try {
		await updateTransactions(id_field, type, nominal, description, created_by, last_update_by);

		res.status(200).json({
			message: "PATCH: Success to update transaction",
			data: {
				id_field,
				type,
				nominal,
				description,
				created_by,
				last_update_by,
			},
		});
	} catch (err) {
		res.status(500).json({
			message: "PATCH: Failed to update transaction",
			error: err,
		});
	}
};

export const deleteTransaction = async (req, res) => {
	const { id_field, type } = req.body;

	try {
		await deleteTransactions(id_field, type);

		res.status(200).json({
			message: "Success to delete transaction",
			data: null,
		});
	} catch (err) {
		res.status(500).json({
			message: "DELETE: Failed to delete transaction",
			error: err,
		});
	}
};

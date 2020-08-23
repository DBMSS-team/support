const router = require('express').Router();
let Support = require('../../db/models/support.model').Support;

// Get all products
router.route('/').get((req, res) => {
	Support.find()
		.then((Support) => res.json(Support))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Get specific Support
router.route('/:id').get((req, res) => {
	const id = req.params.id;
	Support.findById(id, (err, Support) => {
		if (err) res.status(400).json('Error: ' + err);
		res.json(Support);
	});
});

// Create new Support
router.route('/').post((req, res) => {
	const newSupport = new Support(req.body);
	newSupport
		.save()
		.then(() => res.json('Support added.'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Update a specific Support
router.route('/:id').put(async (req, res) => {
	const id = req.params.id;
	try {
		let updatedSupport = await Support.findByIdAndUpdate(id, req.body, {
			new: true,
			useFindAndModify: false,
		});
		res.json(updatedSupport);
	} catch (err) {
		res.status(400).json('Error: ' + err);
	}
});

// Delete a Support
router.route('/:id').delete(async (req, res) => {
	const id = req.params.id;
	try {
		const deletedSupport = await Support.findByIdAndDelete(id);
		res.json(deletedSupport);
	} catch (err) {
		res.status(400).json('Error: ' + err);
	}
});

module.exports = router;

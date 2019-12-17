const router = require('express').Router();
const assetControler = require('../controllers/assets/asset.controller');

//Get all Buildings
router.post('/add', assetControler.addAsset);

// Get single building
// router.get('/:id', buildingController.getSingleBuilding);

// Add Building
// router.post('/add', buildingController.addBuilding);

// Delete Building
// router.delete('/delete', buildingController.deleteBuilding);

// Update Building
// router.patch('/update', buildingController.updateBuilding);

module.exports = router;

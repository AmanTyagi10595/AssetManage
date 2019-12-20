const router = require('express').Router();
const assetControler = require('../controllers/assets/asset.controller');

// add assets
router.post('/add', assetControler.addAsset);

// Get all assets of single building
router.get('/assetsOfRoom/:id', assetControler.getAssetsOfRoom);

// Add Building
// router.post('/add', buildingController.addBuilding);

// Delete Building
// router.delete('/delete', buildingController.deleteBuilding);

// Update Building
// router.patch('/update', buildingController.updateBuilding);

module.exports = router;

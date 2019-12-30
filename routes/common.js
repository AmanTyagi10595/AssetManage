const router = require("express").Router();
const common = require("../controllers/common/common.comtroller");

router.post("/signup", common.signUp);
router.post("/login", common.login);


module.exports = router;
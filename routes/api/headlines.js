var router = require("express").Router();
var headlineController = require("../../controllers/headline");

router.get("/", headlineController.findAll);
// "id" is dynamic and used only on delete and put
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

module.exports = router;

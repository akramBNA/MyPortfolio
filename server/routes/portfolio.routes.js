const router = require('express').Router();
const portfolioController = require("../controllers/portfolio.controller");

router.get("/getAll/", portfolioController.selectAll);
router.post("/postOne/", portfolioController.addOne);
router.put("/updateOne/:title", portfolioController.updateOne);
router.delete("/deleteOne/:title", portfolioController.deleteOne);
router.delete("/deleteAll/", portfolioController.deleteAll);

module.exports = router;
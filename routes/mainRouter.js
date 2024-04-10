let express = require("express");
let controller = require("../Controllers/mainController");

const router = express.Router();

router.get("/",controller.index)
router.get("/webProjects",controller.webProjects)
router.get("/androidProjects",controller.androidProjects)
router.get("/contact",controller.contact)
router.get("/resume",controller.resume)

module.exports = router;
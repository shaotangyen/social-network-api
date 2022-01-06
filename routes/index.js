const router = require("express").Router();
const userRoutes = require("./api/userRoutes.js");
const thoughtRoutes = require("./api/thoughtRoutes.js");

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;
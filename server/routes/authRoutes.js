const express = require("express");

const router = express.Router();

// Test Auth Route
router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

module.exports = router;
const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/EmployeeController");
router.post("/create-employee", EmployeeController.createEmployee);

module.exports = router;

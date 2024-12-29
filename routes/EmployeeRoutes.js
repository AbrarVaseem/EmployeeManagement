const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/EmployeeController");
router.post("/create-employee", EmployeeController.createEmployee);
router.get("/get-employees", EmployeeController.getAllEmployees);
router.get("/get-employee/:id", EmployeeController.getEmployeeById);
router.put("/update-employee/:id", EmployeeController.updateEmployee);
router.delete("/delete-employee/:id", EmployeeController.deleteEmployee);

module.exports = router;

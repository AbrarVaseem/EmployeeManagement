const Employee = require("../models/Employee");

// Create Employee
const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = new Employee({ name, email, phone, city });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    console.log(err, "Error");
    res.status(500).json({ message: `${err} Failed to Create` });
  }
};

// Get All Employee
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (e) {
    res.status(500).json({ message: `${err} Failed to Get Employees` });
  }
};

// Get Single Employee
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (e) {
    res.status(500).json({ message: `${err} Failed to Get Employee ID` });
  }
};

// Update Employee Data
const updateEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
      city,
    });
    if (!employee) {
      return res.status(404).json({ message: `Employee ID Not Found` });
    }
    console.log(employee)
    res.status(200).json(employee);
  } catch (e) {
    res.status(500).json({ message: `Failed to Update Employee` });
  }
};

// Delete Employee Id
const deleteEmployee = async (req, res) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.status(204).json(deleteEmployee);
  } catch (e) {
    res.status(500).json({ message: `Failed to Delete Employee` });
  }
};

module.exports = { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee };
const Employee = require("../models/Employee");

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

module.exports = { createEmployee };
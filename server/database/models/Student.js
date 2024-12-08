/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email : {
    type: Sequalize.STRING,
    allowNull: false
  },
  GPA: {
    type: Sequelize.DECIMAL,
    allowNULL: true
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://via.placeholder.com/150"
  }

});

// Export the student model
module.exports = Student;
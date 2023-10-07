// models/Appointment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Your database connection

const Appointment = sequelize.define("Appointment", {
  appointmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensure that the email format is valid
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  specialRemarks: {
    type: DataTypes.TEXT,
  },
});

module.exports = Appointment;

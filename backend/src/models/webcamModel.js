const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Webcam = sequelize.define('Webcam', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.JSONB, // { city, subcity, roadnum }
    allowNull: false
  },
  tag: {
    type: DataTypes.ENUM('critical', 'classified', 'normal'),
    allowNull: false
  },
  cam_id_access: {
    type: DataTypes.STRING, // ID used with cv.VideoCapture(cam_id_access)
    allowNull: false
  }
});

module.exports = Webcam;
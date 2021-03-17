'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Event title cannot empty, please input coloumn title"
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Event location cannot empty, please input coloumn location"
        }
      }
    },
    participant: {
      type: DataTypes.ARRAY(Sequelize.TEXT),
      validate: {
        notEmpty: {
          args: true,
          msg: "Participant cannot empty, please input coloumn participant"
        }
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: "Event date cannot empty, please input coloumn date"
        }
      }
    },
    note: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Event note cannot empty, please input coloumn note"
        },
        len: {
          args: [50, 255],
          msg: "Note must contain at least 50 characters and maximum 255 characters"
        }
      }
    },
    picture: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please input picture"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
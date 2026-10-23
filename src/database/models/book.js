"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // связи будут позже
    }
  }

  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      shelf_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
      },

      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Book",
    },
  );

  return Book;
};

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shelf extends Model {
    static associate(models) {
      // связи будут позже
    }
  }

  Shelf.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Shelf",
    },
  );

  return Shelf;
};

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      // связи будут позже
    }
  }

  Country.init(
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
      modelName: "Country",
    },
  );

  return Country;
};

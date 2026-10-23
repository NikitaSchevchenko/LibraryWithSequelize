"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // связи будут позже
    }
  }

  Author.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      nationality_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Author",
    },
  );

  return Author;
};

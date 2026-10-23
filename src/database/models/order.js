"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // связи будут позже
    }
  }

  Order.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    },
  );

  return Order;
};

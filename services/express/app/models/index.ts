import { Sequelize, DataTypes } from "sequelize";
import User from "./user";

var sequelize = null;
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
    protocol: "mysql",
    logging: true, //false
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: "mysql",
    }
  );
}

const models = {
  User,
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    xero_userid: {
      type: DataTypes.UUID,
    },
    active_tenant: {
      type: DataTypes.JSON,
    },
    decoded_id_token: {
      type: DataTypes.JSON,
    },
    token_set: {
      type: DataTypes.JSON,
    },
    subscription: {
      type: DataTypes.JSON,
    },
    session: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;

import bcrypt from 'bcrypt';
/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for users
 * @return {object} user model
 */
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exists',
        fields: [sequelize.fn('lower', sequelize.col('username'))],
      },
      validate: {
        min: {
          args: 3,
          msg: 'Username too short',
          fields: [sequelize.fn('lower', sequelize.col('username'))],
        },
        max: {
          args: 30,
          msg: 'Username too long',
          fields: [sequelize.fn('lower', sequelize.col('username'))],
        },
        is: {
          args: /^[A-Za-z0-9]+$/i,
          msg: 'Username must contain letter and numbers only',
          fields: [sequelize.fn('lower', sequelize.col('username'))],
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists',
        fields: [sequelize.fn('lower', sequelize.col('email'))],
      },
      validate: {
        isEmail: {
          arg: true,
          msg: 'Invalid email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCreate: (user) => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    },

    classMethods: {
      associate: (models) => {
        User.hasMany(models.Group, {
          as: 'Groups',
        });
      },
    },
  });
  return User;
};

export default UserModel;

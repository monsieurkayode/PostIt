import bcrypt from 'bcrypt';
/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for users
 * @return {object} user model
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lasttName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exists',
      },
      validate: {
        min: {
          args: 3,
          msg: 'Username too short',
        },
        max: {
          args: 30,
          msg: 'Username too long',
        },
        is: {
          args: /^[A-Za-z0-9]+$/i,
          msg: 'Username must contain letter and numbers only',
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists',
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
    // groupId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Groups',
    //     key: 'id',
    //     as: 'groupId'
    //   },
    // },
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
          foreignKey: 'userId',
          as: 'member',
          // sourceKey: 'id'
        });
      },
    },
  });
  return User;
};

// export default UserModel;

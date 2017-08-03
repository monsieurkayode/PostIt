const bcrypt = require('bcrypt');

function hashPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

const users = [
  {
    id: 1,
    firstName: 'Patrick',
    lastName: 'Stewart',
    username: 'patsiizy',
    password: hashPassword('passover'),
    email: 'patzii@gmail.com',
  },

  {
    id: 2,
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    username: 'sponge',
    password: hashPassword('squarepants'),
    email: 'spongebob@gmail.com',
  },

  {
    id: 3,
    firstName: 'Super',
    lastName: 'Mario',
    username: 'mariobros',
    password: hashPassword('princess'),
    email: 'mario@gmail.com',
  },

  {
    id: 4,
    firstName: 'Jack',
    lastName: 'Frost',
    username: 'iceprince',
    password: hashPassword('frozen'),
    email: 'jackfrost@gmail.com',
  },

  {
    id: 5,
    firstName: 'King',
    lastName: 'Kong',
    username: 'donkeykong',
    password: hashPassword('banana'),
    email: 'donkeybanaba@gmail.com',
  },

  {
    id: 6,
    firstName: 'Optimus',
    lastName: 'Prime',
    username: 'optimusalpha',
    password: hashPassword('passover'),
    email: 'primealpha@gmail.com',
  },
];

export default users;

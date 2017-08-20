import dotenv from 'dotenv';
import database from '../config/config.json';

dotenv.load();
const config = {
  development: {
    use_env_variable: 'DATABASE_URL'
  },
  test: {
    use_env_variable: database.test,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: database.production
  },
};
export default config;

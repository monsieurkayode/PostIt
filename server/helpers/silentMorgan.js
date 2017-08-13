import morgan from 'morgan';

const silentMorgan = {
  disableLogger() {
    morgan.silent = true;
  }
};

export default silentMorgan;

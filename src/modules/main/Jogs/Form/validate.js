const isInteger = /^[0-9]+$/;
const isFloat = /^([0-9]+[.])?[0-9]+$/;

const validate = (values) => {
  const errors = {};
  const { distance, time, date } = values;

  if (!distance) {
    errors.distance = 'Required';
  } else if (!isFloat.test(time)) {
    errors.distance = 'Should be float value';
  }

  if (!time) {
    errors.time = 'Required';
  } else if (!isInteger.test(time)) {
    errors.time = 'Should be integer value';
  }

  if (!date) {
    errors.date = 'Required';
  }

  return errors;
};

export default validate;

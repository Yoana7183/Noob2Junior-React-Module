import { useEffect, useState, useContext } from 'react';
import { TipsCalculatorContext } from '../context/TipsCalculatorContext-file';
import PropTypes from 'prop-types';
const useValidateNumberInput = (
  errorSetFunction,
  valueToValidate,
  inputCleanFunc,
  contextPropertyToBeUpdated
) => {
  const [returnValue, setReturnValue] = useState(0);
  const { inputsInObject, updateContext } = useContext(TipsCalculatorContext);
  const contextObjectProperty = contextPropertyToBeUpdated[0];

  useEffect(() => {
    if (inputsInObject[contextObjectProperty] == 0) {
      inputCleanFunc('');
      errorSetFunction('');
    }
    if (inputsInObject[contextObjectProperty] == 0 && returnValue == 0) {
      errorSetFunction('');
      inputCleanFunc('');
    }
  }, [inputsInObject[contextObjectProperty]]);

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(valueToValidate)) {
      errorSetFunction(`Please enter a number`);
    } else if (isNaN(valueToValidate)) {
      errorSetFunction(`Please enter a number`);
    } else if (valueToValidate < 0) {
      errorSetFunction(`Can't be negative`);
      inputCleanFunc(0);
    } else if (valueToValidate === undefined) {
      errorSetFunction('');
    } else {
      setReturnValue(valueToValidate);
      updateContext(contextObjectProperty, valueToValidate);

      errorSetFunction('');
    }
  }, [valueToValidate, returnValue]);

  return returnValue;
};

useValidateNumberInput.propTypes = {
  errorSetFunction: PropTypes.func.isRequired,
  valueToValidate: PropTypes.any.isRequired,
  inputCleanFunc: PropTypes.func.isRequired,
  contextPropertyToBeUpdated: PropTypes.any.isRequired,
};

export default useValidateNumberInput;

import { useEffect, useState, useContext } from 'react';
import { TipsCalculatorContext } from '../context/TipsCalculatorContext-file';
import PropTypes from 'prop-types';

/**
 * Custom hook for validating numeric input and updating context.
 *
 * @param {Function} errorSetFunction - Function to set errors.
 * @param {number} valueToValidate - Value to be validated.
 * @param {Function} inputCleanFunc - Function to clean input.
 * @param {string} contextPropertyToBeUpdated - Property in context to be updated.
 * @returns {number} - Returns the validated value.
 */
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
    if (inputsInObject[contextObjectProperty] === 0) {
      inputCleanFunc('');
      errorSetFunction('');
    }
    if (inputsInObject[contextObjectProperty] === 0 && returnValue === 0) {
      errorSetFunction('');
      inputCleanFunc('');
    }
  }, [inputsInObject[contextObjectProperty]]);

  useEffect(() => {
    if (/^[a-zA-Z]+$/.test(valueToValidate)) {
      errorSetFunction('Please enter a number');
    }
    if (/[-+*/]/.test(valueToValidate)) {
      errorSetFunction("Can't be negative");
    } else if (isNaN(valueToValidate)) {
      errorSetFunction('Please enter a number');
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
  valueToValidate: PropTypes.number.isRequired,
  inputCleanFunc: PropTypes.func.isRequired,
  contextPropertyToBeUpdated: PropTypes.string.isRequired,
};

export default useValidateNumberInput;

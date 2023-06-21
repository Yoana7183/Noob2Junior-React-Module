import { useEffect, useState, useContext } from 'react';
import { TipsContext } from '../Tips_Calculator';
import PropTypes from 'prop-types';
const useValidateNumberInput = (
  errorSetFunction,
  valueToValidate,
  inputCleanFunc
  //   contextPropertyToBeUpdated
) => {
  const [returnValue, setReturnValue] = useState(0);
  const { inputsInObject, setinputsInObject } = useContext(TipsContext);

  useEffect(() => {
    if (inputsInObject.bill == 0) {
      inputCleanFunc(0);
      errorSetFunction('');
    }
    if (inputsInObject.bill == 0 && returnValue == 0) {
      errorSetFunction('');
      inputCleanFunc('');
    }
  }, [inputsInObject.bill]);
  console.log(inputsInObject);

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(valueToValidate)) {
      errorSetFunction(`Please enter a number`);
    }
    if (isNaN(valueToValidate)) {
      errorSetFunction(`Please enter a number`);
    } else if (valueToValidate < 0) {
      errorSetFunction(`Can't be negative`);
    } else if (valueToValidate === undefined) {
      errorSetFunction('');
    } else {
      setReturnValue(valueToValidate);
      setinputsInObject((prev) => ({
        ...prev,
        bill: returnValue,
      }));
      errorSetFunction('');
    }
    console.log(returnValue);
  }, [valueToValidate, returnValue]);

  return returnValue;
};

useValidateNumberInput.propTypes = {
  contextSetFunction: PropTypes.func.isRequired,
  errorSetFunction: PropTypes.func.isRequired,
  contextValue: PropTypes.any.isRequired,
  valueToValidate: PropTypes.any.isRequired,
  inputCleanFunc: PropTypes.func.isRequired,
};

export default useValidateNumberInput;

import { useEffect, useState, useContext } from 'react';
import { TipsContext } from '../Tips_Calculator';
import PropTypes from 'prop-types';
const useValidateNumberInput = (
  errorSetFunction,
  valueToValidate
  //   contextPropertyToBeUpdated
) => {
  const [returnValue, setReturnValue] = useState(0);
  const { inputsInObject, setinputsInObject } = useContext(TipsContext);

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(valueToValidate)) {
      setReturnValue('');
      errorSetFunction(`Please enter a number`);
    }
    if (isNaN(valueToValidate)) {
      setReturnValue('');
      errorSetFunction(`Please enter a number`);
    } else if (valueToValidate < 0) {
      setReturnValue('');
      errorSetFunction(`Can't be negative`);
    } else if (valueToValidate === undefined) {
      setReturnValue('');
      errorSetFunction('');
    } else {
      setReturnValue(valueToValidate);
      setinputsInObject((prev) => ({
        ...prev,
        bill: returnValue,
      }));
      errorSetFunction('');
    }
  }, [valueToValidate]);
  useEffect(() => {
    if (inputsInObject.bill == 0) setReturnValue(0);
  }, [inputsInObject.bill]);
  console.log(returnValue);
  console.log(inputsInObject);
  return returnValue;
};

useValidateNumberInput.propTypes = {
  contextSetFunction: PropTypes.func.isRequired,
  errorSetFunction: PropTypes.func.isRequired,
  contextValue: PropTypes.any.isRequired,
  valueToValidate: PropTypes.any.isRequired,
  contextPropertyToBeUpdated: PropTypes.any.isRequired,
};

export default useValidateNumberInput;

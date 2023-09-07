import { useEffect, useContext } from 'react';
import { TipsCalculatorContext } from './context/TipsCalculatorContext-file';
import { v4 as uuidv4 } from 'uuid';

const useLocalStorageManaging = (total, perPerson) => {
  const { inputsInObject } = useContext(TipsCalculatorContext);
  const localStorageData = { ...inputsInObject, total, perPerson };

  const clearLocalStorage = () => {
    localStorage.clear();
  };
  const getLocalStorageItems = () => {
    const regex = new RegExp('^TipsCalculator/');
    const localStorageKeys = Object.keys(localStorage);

    const filteredItems = localStorageKeys.filter((key) => regex.test(key));

    const items = filteredItems.map((key) => {
      const itemValue = localStorage.getItem(key);
      return JSON.parse(itemValue);
    });

    return items;
  };

  useEffect(() => {
    if (total > 0 && perPerson > 0) {
      localStorage.setItem(
        `TipsCalculator/${uuidv4()}`,
        JSON.stringify(localStorageData)
      );
    }
  }, [total, perPerson]);

  const dequeueLocalStorageList = () => {
    const localStorageKeys = Object.keys(localStorage);

    if (localStorageKeys.length > 0) {
      const firstKey = localStorageKeys[0];
      localStorage.removeItem(firstKey);
    }
  };
  return { clearLocalStorage, getLocalStorageItems, dequeueLocalStorageList };
};

export default useLocalStorageManaging;

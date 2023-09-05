import React from 'react';
import useLocalStorageManaging from '../useLocalStorageManaging';
const ModalHistoryResults = () => {
  const { clearLocalStorage, getLocalStorageItems } = useLocalStorageManaging();
  const result = getLocalStorageItems();
  if (result.length > 5) {
    clearLocalStorage();
  }
  console.log(result);
  return <div>bla</div>;
};

export default ModalHistoryResults;

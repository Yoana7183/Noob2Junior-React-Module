import React, { useState } from 'react';
import useLocalStorageManaging from '../useLocalStorageManaging';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ModalHistoryResults = ({
  historyContainerStatus,
  setHistoryContainerStatus,
}) => {
  if (!historyContainerStatus) {
    return null;
  }

  const { clearLocalStorage, getLocalStorageItems, dequeueLocalStorageList } =
    useLocalStorageManaging();

  const [localStorageData, setLocalStorageData] = useState(
    getLocalStorageItems()
  );

  if (localStorageData.length > 4) {
    dequeueLocalStorageList();
    setLocalStorageData(getLocalStorageItems());
  }

  return (
    <section className="fixed top-0 left-0 w-full h-full items-center justify-center  flex">
      <div className="w-full h-full rounded-lg p-8 absolute top-0 left-0 bg-gray-800 bg-opacity-50">
        <div className="flex items-center justify-center mt-[10%] sm:mt-16">
          <div className="relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => {
                setHistoryContainerStatus();
              }}
            >
              <img
                src="/assetsTipsCalc/close.svg"
                alt="close"
                className="w-7 h-7 cursor-pointer"
              />
            </button>
            <div className="flex justify-center">
              <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[420px] h-full bg-white rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">History</h2>
                {localStorageData.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="text-sm border-b-2 border-buttonOfCalculatorAndRightSideBackground py-2"
                    >
                      <p className="mb-1">Bill: ${item.bill}</p>
                      <p className="mb-1">Percent Tip: {item.tip}%</p>
                      <p className="mb-1">People: {item.people}</p>
                      <p>
                        Total: ${item.total.toFixed(2)} / By Person: $
                        {item.perPerson.toFixed(2)}
                      </p>
                    </div>
                  );
                })}
                {localStorageData.length > 0 && (
                  <button
                    className="flex items-center justify-center mt-4 text-buttonOfCalculatorAndRightSideBackground cursor-pointer"
                    onClick={() => {
                      clearLocalStorage();
                      setLocalStorageData(getLocalStorageItems());
                    }}
                  >
                    <img
                      src="/assetsTipsCalc/delete.png"
                      alt="delete"
                      className="w-7 h-7 mr-2"
                    />
                    <p>Delete History</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalHistoryResults;
ModalHistoryResults.propTypes = {
  setHistoryContainerStatus: PropTypes.func.isRequired,
  historyContainerStatus: PropTypes.bool,
  dequeueLocalStorageList: PropTypes.func,
};

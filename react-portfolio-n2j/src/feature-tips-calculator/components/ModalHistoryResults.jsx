import React from 'react';
import useLocalStorageManaging from '../useLocalStorageManaging';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
const ModalHistoryResults = ({
  historyContainerStatus,
  setHistoryContainerStatus,
}) => {
  const { clearLocalStorage, getLocalStorageItems } = useLocalStorageManaging();
  const result = getLocalStorageItems();

  if (result.length > 5) {
    clearLocalStorage();
  }
  if (!historyContainerStatus) {
    return null;
  }

  return (
    <section className="fixed top-0 left-0 w-full h-full items-center justify-center  flex">
      <div className="w-full h-full rounded-lg p-8 absolute top-0 left-0 bg-gray-800 bg-opacity-50">
        <div className="flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => {
                setHistoryContainerStatus();
              }}
            >
              close
            </button>
            <div className="flex justify-center">
              <div className="w-[250px] h-full bg-white">
                {result.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="text-sm list-none border-b-2 border-buttonOfCalculatorAndRightSideBackground py-2 px-2"
                    >
                      <li>Bill: {item.bill}</li>
                      <li>Percent Tip: {item.tip} %</li>
                      <li>People: {item.people}</li>
                      <li>
                        Total: {item.total.toFixed(2)} / By Person:{' '}
                        {item.perPerson.toFixed(2)}
                      </li>
                    </div>
                  );
                })}
                <button
                  onClick={() => {
                    clearLocalStorage();
                  }}
                >
                  Delete history
                </button>
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
};

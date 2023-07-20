import ResetBtn from './ResetBtn';
import PropTypes from 'prop-types';

const RightPart = ({ total, byPerson }) => {
  let totalByPerson = byPerson;
  let totalAmount = total;

  if (
    totalByPerson === null ||
    totalByPerson === Infinity ||
    isNaN(totalByPerson) ||
    totalByPerson === -Infinity ||
    totalByPerson < 0
  ) {
    totalByPerson = 0;
  }
  if (
    totalAmount === null ||
    totalAmount === Infinity ||
    isNaN(totalAmount) ||
    totalAmount === -Infinity ||
    totalAmount < 0
  ) {
    totalAmount = 0;
  }
  if (totalAmount == 0) {
    totalAmount == '';
  }
  if (totalByPerson == 0) {
    totalByPerson == '';
  }

  const resultNumStyle = `text-hoverbuttonOfCalculatorAndRightSideBackground text-3xl lg:text-6xl  sm:text-6xl flex bold `;
  const backgroundStyleisEmpty =
    'bg-buttonOfCalculatorAndRightSideBackground mt-[-6rem] lg:w-[420px] sm:mt-[-3rem] lg:mt-0 rounded-lg p-6 lg:h-[417px] mr-[5%] ml-[5%]';

  return (
    <section className={backgroundStyleisEmpty}>
      <div className="text-white flex justify-between pt-5">
        <div className="font-bold">
          Tip Amount
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-3xl lg:text-4xl  sm:text-4xl p-0 lg:pt-2 font-black">
            $
          </div>
          {totalByPerson.toFixed(2)}
        </div>
      </div>
      <div className="text-white flex justify-between pt-10">
        <div className="font-bold">
          Total
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-3xl lg:text-4xl  sm:text-4xl lg:pt-2 font-black">
            $
          </div>

          {totalAmount.toFixed(2)}
        </div>
      </div>
      <ResetBtn />
    </section>
  );
};
RightPart.propTypes = {
  total: PropTypes.any.isRequired,
  byPerson: PropTypes.any.isRequired,
};

export default RightPart;

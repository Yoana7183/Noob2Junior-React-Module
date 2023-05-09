import InputBill from './InputBill';
import InputNumberOfPeople from './InputNumberOfPeople';
import TipsBtnAndInput from './TipsBtnAndInput';

const LeftPart = () => {
  return (
    <div>
      <div>
        <InputBill />
      </div>
      <div>
        <TipsBtnAndInput />
      </div>
      <div>
        <InputNumberOfPeople />
      </div>
    </div>
  );
};

export default LeftPart;
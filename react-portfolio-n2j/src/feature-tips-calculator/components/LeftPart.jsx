import InputBill from './InputBill';
import InputNumberOfPeople from './InputNumberOfPeople';
import TipsBtnAndInput from './TipsBtnAndInput';

const LeftPart = () => {
  return (
    <div className="p-6 w-[420px]">
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

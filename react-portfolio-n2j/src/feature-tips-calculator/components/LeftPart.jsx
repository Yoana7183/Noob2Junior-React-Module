import InputBill from './InputBill';
import InputNumberOfPeople from './InputNumberOfPeople';
import TipsBtnAndInput from './TipsBtnAndInput';

const LeftPart = () => {
  return (
    <main className="p-6 lg:w-[420px]">
      <InputBill />
      <TipsBtnAndInput />
      <InputNumberOfPeople />
    </main>
  );
};

export default LeftPart;

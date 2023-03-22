import sam from '/src/img/sam.jpg';
import '/src/css/main.css';

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>'eeee '</h1>

        <h1 className="text-3xl font-bold underline text-center bg-green-900">
          Hello world!
        </h1>

        <img src={sam} alt="Sammy Image" width={200} height={200} />
      </div>
    </>
  );
}

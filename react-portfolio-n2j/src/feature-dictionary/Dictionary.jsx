import React from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import WordCommonDetails from './components/WordCommonDetails';
// import PartsOfSpeechContainer from './components/PartsOfSpeechContainer';

const Dictionary = () => {
  // const [word, setWord] = useState('big');
  // const [wordObject, setWordObject] = useState({});

  // const data = useGetRequest(baseUrl, word);
  // useEffect(() => {
  //   if (data.data == null) {
  //     return;
  //   }
  //   if (data.error == true) {
  //     setWordObject(data.error);
  //     console.log(data.data.title);
  //   }
  //   if (data.data[0] !== undefined) {
  //     setWordObject(data);
  //   }

  //   if (data.data[0] == undefined) {
  //     setWordObject({});
  //   }
  // }, [data.data]);

  // console.log(data);
  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput />
      </div>
      <div>
        <WordCommonDetails />
      </div>
      {/* <div className="">
        {partOfSpeechObject.meanings.map((definition, index) => (
          <PartsOfSpeechContainer key={index} wordObject={definition} />
        ))}
      </div> */}
    </>
  );
};

export default Dictionary;

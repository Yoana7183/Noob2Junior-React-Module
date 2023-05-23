import { useEffect, useState } from 'react';

function useFetchData(userName) {
  const [fetchedData, setfetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
          console.log(error);
          throw new Error('Oops.. something went wrong!');
        }
        return response.json();
      })
      .then((data) => {
        setfetchedData(data);
        console.log(fetchedData);
        console.log(isLoading);
        setIsLoading(false);
        setError(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (fetchedData != null && isLoading == false && error == false) {
    console.log(fetchedData);
    return fetchedData;
  }
  if (isLoading == true) {
    return isLoading;
  }

  if (fetchedData == null && isLoading == false && error == true) {
    return error;
  }
}

export default useFetchData;

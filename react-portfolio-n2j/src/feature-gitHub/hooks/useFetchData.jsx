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
        }
        return response.json();
      })
      .then((data) => {
        setfetchedData(data);
        setIsLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [userName]);

  if (fetchedData != null && !isLoading && error == false) {
    console.log(fetchedData);
    return fetchedData;
  }
  if (isLoading == true) {
    return isLoading;
  }

  if (fetchedData == null && !isLoading && error == true) {
    return error;
  }
}

export default useFetchData;

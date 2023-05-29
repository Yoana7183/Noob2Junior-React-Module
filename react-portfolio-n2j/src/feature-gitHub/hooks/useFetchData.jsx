import { useEffect, useState } from 'react';

function useFetchData(userName) {
  const [fetchedData, setfetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userName.length == 0) {
      return;
    }

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
      })
      .catch((error) => {
        setError(true);
        error;
      });
  }, [userName]);

  return { data: fetchedData, loading: isLoading, error: error };
}

export default useFetchData;

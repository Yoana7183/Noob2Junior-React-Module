import { useEffect, useState } from 'react';

function useFetchData(userName) {
  const [fetchedData, setfetchedData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userName.length == 0) {
      return;
    }
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
        if (response.ok) {
          setError(false);
        }
        return response.json();
      })
      .then((data) => {
        setfetchedData(data);
      })
      .catch((error) => {
        setError(true);
        error;
      });
  }, [userName]);

  return { data: fetchedData, error: error };
}

export default useFetchData;

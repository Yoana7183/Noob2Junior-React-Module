import { useEffect, useState } from 'react';

function useFetchData(userName) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = `https://api.github.com/users/${userName}`;

  useEffect(() => {
    if (userName.length == 0) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
          },
        });
        if (!response.ok) {
          setError(true);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;

import { useEffect, useState } from 'react';

function useFetchData(baseUrl, value, apiKey = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = baseUrl + value;

  useEffect(() => {
    if (value.length == 0) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const headers = {};
        if (apiKey) {
          headers['Authorization'] = `Bearer ${apiKey}`;
        }
        const response = await fetch(url, { headers });
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
  }, [value, apiKey]);

  return { data, loading, error };
}

export default useFetchData;

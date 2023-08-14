import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching data from an API - GET REQUEST.
 * @param {string} baseUrl - The base URL of the API.
 * @param {string} value - The value to append to the base URL for fetching.
 * @param {string|null} apiKey - Optional API key for authorization.
 * @returns {Object} - An object containing fetched data, loading state, and error state.
 */
function useFetchData(baseUrl, value, apiKey = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = baseUrl + value;

  useEffect(() => {
    if (value.length === 0) {
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

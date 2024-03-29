import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook for fetching data from an API - GET REQUEST.
 * @param {string} baseUrl - The base URL of the API.
 * @param {string} queryParameter - The value to append to the base URL for fetching.
 * @param {string|null} apiKey - Optional API key for authorization.
 * @returns {Object} - An object containing fetched data, loading state, and error state.
 */
function useFetchData(baseUrl, queryParameter, apiKey = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = baseUrl + queryParameter;

  const fetchData = async () => {
    setLoading(true);
    try {
      const headers = {};
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }
      const response = await axios.get(url, { headers });
      if (response.status !== 200) {
        setError(true);
      }
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (queryParameter.length === 0) {
      return;
    }
    setError(false);
    fetchData();
  }, [queryParameter, apiKey]);

  return { data, loading, error };
}

export default useFetchData;

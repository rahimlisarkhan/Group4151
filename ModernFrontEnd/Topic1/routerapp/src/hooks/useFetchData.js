import { useCallback, useEffect, useState } from "react";

export const useFetchData = (requestCallback) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await requestCallback();
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [requestCallback]);

  return { data, loading, error };
};

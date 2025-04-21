import { useState, useEffect } from 'react';
import { getTwitterMetrics } from '../api/twitterApi';

export const useFetchStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTwitterMetrics()
      .then((data) => setStats(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading, error };
};

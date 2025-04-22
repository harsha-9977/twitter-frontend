import { useState, useEffect } from 'react';
import { StatsCard } from './StatsCard';
import { Chart } from './Charts';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stats from backend API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://twitter-backend.onrender.com/api/twitter');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* Stats Cards */}
      <StatsCard label="Followers" value={stats.followers} />
      <StatsCard label="Tweets" value={stats.tweets_count} />
      <StatsCard label="Listed" value={stats.listed_count} />

      {/* Chart Section */}
      <div className="col-span-3 mt-6 p-4 bg-white rounded-lg shadow">
        <Chart history={stats.history || []} />
      </div>
    </div>
  );
};

export default Dashboard;

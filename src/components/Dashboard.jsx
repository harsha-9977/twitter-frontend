import { useFetchStats } from '../hooks/useFetchStats';
import { StatsCard } from './StatsCard';
import { Chart } from './Charts';

const Dashboard = () => {
  const { stats, loading, error } = useFetchStats();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <StatsCard label="Followers" value={stats.followers} />
      <StatsCard label="Tweets" value={stats.tweets_count} />
      <StatsCard label="Listed" value={stats.listed_count} />
      <div className="col-span-3 mt-6 p-4 bg-white rounded-lg shadow">
        <Chart history={stats.history || []} />
      </div>
    </div>
  );
};

export default Dashboard;

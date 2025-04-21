import { Line } from 'react-chartjs-2';

export const Chart = ({ history }) => {
  const data = {
    labels: history.map((h) => new Date(h.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Followers',
        data: history.map((h) => h.followers),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

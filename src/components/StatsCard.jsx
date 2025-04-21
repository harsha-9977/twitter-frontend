export const StatsCard = ({ label, value }) => (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
  
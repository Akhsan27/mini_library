interface StatCardProps{
    title:string;
    value:string|number;
}

const StatCard = ({ title, value }:StatCardProps) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);

export default StatCard;
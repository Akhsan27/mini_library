interface StatCardProps{
    title:string;
    value:string|number;
}

const StatCard = ({ title, value }:StatCardProps) => (
  <div className="bg-blue-300 rounded-xl shadow p-6">
    <p className="text-gray-800 text-sm monsterrat">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </div>
);

export default StatCard;
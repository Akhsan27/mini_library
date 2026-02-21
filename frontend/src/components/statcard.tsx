interface StatCardProps{
    title:string;
    value:string|number;
}

const StatCard = ({ title, value }:StatCardProps) => (
  <div className="hover-grow bg-gray-300 rounded-sm  shadow-2xs  p-4">
    <p className="text-gray-900 font-semibold text-sm monsterrat">{title}</p>
    <h2 className="text-2xl text-blue-500 font-bold mt-2">{value}</h2>
  </div>
);

export default StatCard;
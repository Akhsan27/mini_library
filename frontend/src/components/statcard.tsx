interface StatCardProps {
  title: string;
  value: string | number;
  image: string;
  color:string;
}

const StatCard = ({ title, value, image, color }: StatCardProps) => (
  <div className={`hover-grow rounded-sm  shadow-2xs  p-7 relative overflow-hidden ${color}`}>
    <img
      src={image}
      alt="pattern"
      className="absolute right-0 bottom-0 w-24 opacity-20"
    />
    <div className="relative">
      <p className="text-white font-semibold text-xl monsterrat">{title}</p>
      <h2 className="text-2xl text-blue-500 font-bold mt-2">{value}</h2>
    </div>
  </div>
);

export default StatCard;

interface CardProps{
    title:string;
    children:React.ReactNode;
    className?:string;
}

const Card = ({ title, children, className = "" }:CardProps) => (
  <div className={`bg-white rounded-2xl shadow p-6 ${className}`}>
    <h3 className="font-semibold mb-4 lg:text-md monsterrat text-gray-600">{title}</h3>
    {children}
  </div>
);

export default Card;
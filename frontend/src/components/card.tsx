interface CardProps{
    title:string;
    children:React.ReactNode;
    className?:string;
}

const Card = ({ title, children, className = "" }:CardProps) => (
  <div className={`bg-white rounded-2xl shadow p-6 ${className}`}>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

export default Card;
interface AlertItemProps{
    name:string;
    book:string;
    days:string|number;
}

const AlertItem = ({ name, book, days }:AlertItemProps) => (
  <li className="flex justify-between items-center bg-red-50 hover:bg-red-100 transition transition-shadow p-3 rounded-lg">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">Buku: {book}</p>
    </div>
    <span className="text-red-600 font-semibold">{days}</span>
  </li>
);

export default AlertItem


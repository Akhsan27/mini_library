interface ListItemProps{
    title:string;
    subtitle:string
}

const ListItem = ({ title, subtitle }:ListItemProps) => (
  <li className="flex justify-between items-center border-b pb-2">
    <span className="font-medium">{title}</span>
    <span className="text-sm text-gray-500">{subtitle}</span>
  </li>
);

export default ListItem
type MemberStatus = "Aktif" | "Nonaktif";

type MemberRowProps = {
  name: string;
  contact: string;
  status: MemberStatus;
  totalBorrow: number;
  fine: number;
};

const MemberRow = ({ name, contact, status, totalBorrow, fine }: MemberRowProps) => {
  return (
    <tr className="border-b">
      <td className="py-2">{name}</td>
      <td>{contact}</td>
      <td>{totalBorrow}</td>
      <td>Rp {fine.toLocaleString()}</td>
      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "Aktif"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

export default MemberRow;

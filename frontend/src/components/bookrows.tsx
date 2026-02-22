interface BookRowProps{
    title:string;
    author:string;
    category:string;
    stock:string|number;
    status: "Tersedia" | "Tidak Tersedia"|"Dipinjam";
}

const BookRow = ({ title, author, category, stock, status }:BookRowProps) => (
  <tr className="border-t">
    <td className="p-4 font-medium">{title}</td>
    <td className="p-4">{author}</td>
    <td className="p-4">{category}</td>
    <td className="p-4">{stock}</td>
    <td className="p-4">
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          status === "Tersedia"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="p-4 text-center space-x-2">
      <button className="btn-edit px-3 py-1 rounded">
        Edit
      </button>
      <button className="btn-delete text-white px-3 py-1 rounded">
        Hapus
      </button>
    </td>
  </tr>
);

export default BookRow;
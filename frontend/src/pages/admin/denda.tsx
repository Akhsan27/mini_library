import Header from "../../components/header";
import { useState } from "react";

/* ===== Interface ===== */
interface Fine {
  id: number;
  member: string;
  book: string;
  dueDate: string;
  returnDate: string;
  amount: number;
  paid: boolean;
}

/* ===== Helper Hitung Denda ===== */
const calculateFine = (dueDate: string, returnDate: string): number => {
  const due = new Date(dueDate);
  const returned = new Date(returnDate);

  const diff = Math.ceil(
    (returned.getTime() - due.getTime()) / (1000 * 60 * 60 * 24)
  );

  return diff > 0 ? diff * 2000 : 0;
};

const FinePage = () => {
  const [fines, setFines] = useState<Fine[]>([
    {
      id: 1,
      member: "Andi Pratama",
      book: "Laskar Pelangi",
      dueDate: "2025-02-10",
      returnDate: "2025-02-13",
      amount: calculateFine("2025-02-10", "2025-02-13"),
      paid: false,
    },
    {
      id: 2,
      member: "Siti Rahma",
      book: "Atomic Habits",
      dueDate: "2025-02-05",
      returnDate: "2025-02-05",
      amount: calculateFine("2025-02-05", "2025-02-05"),
      paid: true,
    },
  ]);

  const handlePaid = (id: number) => {
    setFines(
      fines.map((fine) =>
        fine.id === id ? { ...fine, paid: true } : fine
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-6 space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-bold">Denda & Pembayaran</h1>

        {/* Tabel Denda */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Anggota</th>
                <th className="p-4">Buku</th>
                <th className="p-4">Jatuh Tempo</th>
                <th className="p-4">Tanggal Kembali</th>
                <th className="p-4">Besaran Denda</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {fines.map((fine) => (
                <tr key={fine.id} className="border-t">
                  <td className="p-4">{fine.member}</td>
                  <td className="p-4">{fine.book}</td>
                  <td className="p-4">{fine.dueDate}</td>
                  <td className="p-4">{fine.returnDate}</td>

                  <td className="p-4 font-semibold">
                    {fine.amount > 0 ? `Rp ${fine.amount}` : "-"}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        fine.paid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {fine.paid ? "Lunas" : "Belum Bayar"}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    {!fine.paid && fine.amount > 0 && (
                      <button
                        onClick={() => handlePaid(fine.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Tandai Lunas
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default FinePage;

import Header from "../../components/header";
import { useState } from "react";
import type { Borrowing } from "../../components/borrowing";

const BorrowPage = () => {
  const today = new Date();

  const [borrowings, setBorrowings] = useState<Borrowing[]>([
    {
      id: 1,
      member: "Andi Pratama",
      book: "Laskar Pelangi",
      dueDate: "2025-02-10",
    },
    {
      id: 2,
      member: "Siti Rahma",
      book: "Atomic Habits",
      dueDate: "2025-02-18",
    },
  ]);

  const calculateFine = (dueDate:Borrowing["dueDate"]) => {
    const due = new Date(dueDate);
    const diff = Math.ceil((today.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff * 2000 : 0;
  };

  const handleReturn = (id:Borrowing["id"]) => {
    setBorrowings(borrowings.filter((item) => item.id !== id));
  };

  const handleExtend = (id:Borrowing["id"]) => {
    setBorrowings(
      borrowings.map((item) =>
        item.id === id
          ? {
              ...item,
              dueDate: new Date(
                new Date(item.dueDate).setDate(
                  new Date(item.dueDate).getDate() + 7
                )
              )
                .toISOString()
                .split("T")[0],
            }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-6 space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-bold">
          Peminjaman & Pengembalian
        </h1>

        {/* ===== Form Peminjaman Baru ===== */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-lg font-semibold">
            Input Peminjaman Baru
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nama Anggota"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Judul Buku"
              className="border p-2 rounded-lg"
            />
            <input
              type="date"
              className="border p-2 rounded-lg"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Simpan Peminjaman
          </button>
        </div>

        {/* ===== Tabel Peminjaman ===== */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Anggota</th>
                <th className="p-4">Buku</th>
                <th className="p-4">Jatuh Tempo</th>
                <th className="p-4">Denda</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {borrowings.map((item) => {
                const fine = calculateFine(item.dueDate);
                const isLate = fine > 0;

                return (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">{item.member}</td>
                    <td className="p-4">{item.book}</td>
                    <td className="p-4">{item.dueDate}</td>

                    <td className="p-4 font-semibold">
                      {fine > 0 ? `Rp ${fine}` : "-"}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isLate
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {isLate ? "Terlambat" : "Aktif"}
                      </span>
                    </td>

                    <td className="p-4 text-center space-x-2">
                      <button
                        onClick={() => handleReturn(item.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Kembalikan
                      </button>

                      <button
                        onClick={() => handleExtend(item.id)}
                        className="bg-yellow-400 px-3 py-1 rounded"
                      >
                        Perpanjang
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default BorrowPage;

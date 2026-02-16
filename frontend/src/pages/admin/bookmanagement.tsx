import Header from "../../components/header";
import BookRow from "../../components/bookrows";

const BookManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-6 space-y-6">

        {/* Header Halaman */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold">Manajemen Buku</h1>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Cari buku..."
              className="border rounded-lg px-4 py-2 w-64"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              + Tambah Buku
            </button>
          </div>
        </div>

        {/* Tabel Buku */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Judul</th>
                <th className="p-4">Penulis</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Stok</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              <BookRow
                title="Laskar Pelangi"
                author="Andrea Hirata"
                category="Novel"
                stock="12"
                status="Tersedia"
              />
              <BookRow
                title="Atomic Habits"
                author="James Clear"
                category="Self Development"
                stock="0"
                status="Dipinjam"
              />
              <BookRow
                title="Bumi Manusia"
                author="Pramoedya Ananta Toer"
                category="Sejarah"
                stock="5"
                status="Tersedia"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookManagement;



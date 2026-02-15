import Header from "../../components/header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-6 space-y-6">

        {/* ===== Statistik ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Buku" value="1,245" />
          <StatCard title="Total Anggota" value="342" />
          <StatCard title="Peminjaman Aktif" value="89" />
        </div>

        {/* ===== Grid Konten ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Buku Paling Sering Dipinjam */}
          <Card title="Buku Paling Sering Dipinjam">
            <ul className="space-y-3">
              <ListItem title="Laskar Pelangi" subtitle="Dipinjam 120x" />
              <ListItem title="Bumi Manusia" subtitle="Dipinjam 98x" />
              <ListItem title="Atomic Habits" subtitle="Dipinjam 87x" />
            </ul>
          </Card>

          {/* Anggota Baru */}
          <Card title="Anggota Baru">
            <ul className="space-y-3">
              <ListItem title="Andi Pratama" subtitle="Daftar 2 hari lalu" />
              <ListItem title="Siti Rahma" subtitle="Daftar 3 hari lalu" />
              <ListItem title="Budi Santoso" subtitle="Daftar 5 hari lalu" />
            </ul>
          </Card>

          {/* Notifikasi Keterlambatan */}
          <Card title="Keterlambatan Pengembalian" className="lg:col-span-2">
            <ul className="space-y-3">
              <AlertItem name="Rina" book="Filosofi Teras" days="3 hari" />
              <AlertItem name="Dimas" book="Rich Dad Poor Dad" days="5 hari" />
              <AlertItem name="Tono" book="Sapiens" days="2 hari" />
            </ul>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* ===== Komponen Pendukung ===== */

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow p-6 ${className}`}>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const ListItem = ({ title, subtitle }) => (
  <li className="flex justify-between items-center border-b pb-2">
    <span className="font-medium">{title}</span>
    <span className="text-sm text-gray-500">{subtitle}</span>
  </li>
);

const AlertItem = ({ name, book, days }) => (
  <li className="flex justify-between items-center bg-red-50 p-3 rounded-lg">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">Buku: {book}</p>
    </div>
    <span className="text-red-600 font-semibold">{days}</span>
  </li>
);

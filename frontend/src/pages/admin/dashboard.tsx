import StatCard from "../../components/statcard";
import Card from "../../components/card";
import ListItem from "../../components/listitem";
import AlertItem from "../../components/alertitem";
import ImgUser from "../../assets/imguser.png"
import ImgBook from "../../assets/imgbook.png"
import ImgBorrow from "../../assets/imgborrowbook.png"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-6">

        {/* ===== Statistik ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Buku" value="1,245" image={ImgBook} color="bg-green-400" />
          <StatCard title="Total Anggota" value="342" image={ImgUser} color="bg-red-500" />
          <StatCard title="Peminjaman Aktif" value="89" image={ImgBorrow} color="bg-yellow-500"/>
        </div>
        <div className="border-t border-gray-400 my-3"></div>

        {/* ===== Grid Konten ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Buku Paling Sering Dipinjam */}
          <Card title="Buku paling sering dipinjam">
            <ul className="space-y-3">
              <ListItem title="Laskar Pelangi" subtitle="Dipinjam 120x" />
              <ListItem title="Bumi Manusia" subtitle="Dipinjam 98x" />
              <ListItem title="Atomic Habits" subtitle="Dipinjam 87x" />
            </ul>
          </Card>
          
          {/* Anggota Baru */}
          <Card title="Member baru">
            <ul className="space-y-3">
              <ListItem title="Andi Pratama" subtitle="Daftar 2 hari lalu" />
              <ListItem title="Siti Rahma" subtitle="Daftar 3 hari lalu" />
              <ListItem title="Budi Santoso" subtitle="Daftar 5 hari lalu" />
            </ul>
          </Card>
          {/* Notifikasi Keterlambatan */}
          <Card title="Keterlambatan pengembalian" className="lg:col-span-2">
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



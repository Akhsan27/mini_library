import StatCard from "../../components/statcard";
import MemberRow from "../../components/memberrows";
import Title from "../../components/title";
import ImgUser from "../../assets/imguser.png"
import UserActive from "../../assets/useractive.png"
import UserNonActive from "../../assets/usernonactive.png"
import DendaImg from "../../assets/money.png"

const MemberPage = () => {
  const members = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      contact: "08123456789",
      status: "Aktif" as const,
      totalBorrow: 12,
      fine: 0,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      contact: "08234567890",
      status: "Nonaktif" as const,
      totalBorrow: 5,
      fine: 15000,
    },
  ];

  return (
    <div>
      {/*header*/}
      <Title>Member</Title>
      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <StatCard title="Total Anggota" value="120" image={ImgUser} color="bg-gray-700"/>
        <StatCard title="Anggota Aktif" value="98" image={UserActive} color="bg-green-500"/>
        <StatCard title="Nonaktif" value="22" image={UserNonActive} color="bg-yellow-500"/>
        <StatCard title="Total Denda" value="Rp 350.000" image={DendaImg} color="bg-red-600"/>
      </div>

      {/* Tabel */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Data Anggota</h2>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-center">
            <tr className="border-b text-gray-700 border-gray-400">
              <th className="py-2 ">Nama</th>
              <th>Kontak</th>
              <th>Total Pinjam</th>
              <th>Denda</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {members.map((member) => (
              <MemberRow
                key={member.id}
                name={member.name}
                contact={member.contact}
                status={member.status}
                totalBorrow={member.totalBorrow}
                fine={member.fine}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberPage;

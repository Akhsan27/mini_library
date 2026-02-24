import { useState } from "react";
import Title from "../../components/title";

/* ===== Interface ===== */
interface Reminder {
  id: number;
  member: string;
  book: string;
  dueDate: string;
  sent: boolean;
}

interface Announcement {
  title: string;
  message: string;
}

const NotificationPage = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      member: "Andi Pratama",
      book: "Laskar Pelangi",
      dueDate: "2025-02-20",
      sent: false,
    },
    {
      id: 2,
      member: "Siti Rahma",
      book: "Atomic Habits",
      dueDate: "2025-02-18",
      sent: true,
    },
  ]);

  const [announcement, setAnnouncement] = useState<Announcement>({
    title: "",
    message: "",
  });

  const handleSendReminder = (id: number) => {
    setReminders(
      reminders.map((item) =>
        item.id === id ? { ...item, sent: true } : item
      )
    );
  };

  const handleAnnouncementChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnnouncement({ ...announcement, [name]: value });
  };

  const handleSendAnnouncement = () => {
    console.log("Pengumuman dikirim:", announcement);
    alert("Pengumuman berhasil dikirim!");
    setAnnouncement({ title: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-6">
      <Title>Notifikasi & Pengumuman</Title>

        {/* ===== Reminder Jatuh Tempo ===== */}
        <div className="bg-white shadow overflow-hidden">
          <div className="p-3 border-b">
            <h2 className=" title-notifikasi">
              Reminder Jatuh Tempo
            </h2>
          </div>

          <table className="w-full text-left text-sm roboto">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Anggota</th>
                <th className="p-4">Buku</th>
                <th className="p-4">Jatuh Tempo</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {reminders.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">{item.member}</td>
                  <td className="p-4">{item.book}</td>
                  <td className="p-4">{item.dueDate}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.sent
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.sent ? "Terkirim" : "Belum Dikirim"}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    {!item.sent && (
                      <button
                        onClick={() => handleSendReminder(item.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Kirim Reminder
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Pengumuman ===== */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4 max-w-xl">
          <h2 className="text-lg font-semibold">
            Kirim Pengumuman ke Anggota
          </h2>

          <input
            type="text"
            name="title"
            value={announcement.title}
            onChange={handleAnnouncementChange}
            placeholder="Judul Pengumuman"
            className="border p-2 rounded-lg w-full"
          />

          <textarea
            name="message"
            value={announcement.message}
            onChange={handleAnnouncementChange}
            placeholder="Isi pengumuman..."
            className="border p-2 rounded-lg w-full h-28"
          />

          <button
            onClick={handleSendAnnouncement}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Kirim Pengumuman
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotificationPage;

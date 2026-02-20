import { useState } from "react";

/* ===== Interface ===== */
interface SystemSettings {
  maxBorrow: number;
  borrowDuration: number;
  finePerDay: number;
  role: "admin" | "petugas";
}

const SettingsPage = () => {
  const [settings, setSettings] = useState<SystemSettings>({
    maxBorrow: 3,
    borrowDuration: 7,
    finePerDay: 2000,
    role: "admin",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]:
        name === "role" ? value : Number(value),
    });
  };

  const handleSave = () => {
    console.log("Pengaturan disimpan:", settings);
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-6 max-w-2xl">

        {/* Header */}
        <h1 className="text-2xl font-bold">
          Pengaturan Sistem
        </h1>

        {/* Card Pengaturan */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-5">

          {/* Batas Maksimal Pinjam */}
          <div>
            <label className="block font-medium mb-1">
              Batas Maksimal Pinjam Buku
            </label>
            <input
              type="number"
              name="maxBorrow"
              value={settings.maxBorrow}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* Lama Masa Pinjam */}
          <div>
            <label className="block font-medium mb-1">
              Lama Masa Pinjam (hari)
            </label>
            <input
              type="number"
              name="borrowDuration"
              value={settings.borrowDuration}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* Denda per Hari */}
          <div>
            <label className="block font-medium mb-1">
              Besaran Denda per Hari (Rp)
            </label>
            <input
              type="number"
              name="finePerDay"
              value={settings.finePerDay}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* Hak Akses */}
          <div>
            <label className="block font-medium mb-1">
              Hak Akses Pengguna
            </label>
            <select
              name="role"
              value={settings.role}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            >
              <option value="admin">Admin</option>
              <option value="petugas">Petugas</option>
            </select>
          </div>

          {/* Tombol Simpan */}
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Simpan Pengaturan
          </button>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

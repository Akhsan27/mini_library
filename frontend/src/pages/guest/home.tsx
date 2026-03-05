import heroImg from "../../assets/library-hero.jpg";
import book1 from "../../assets/buku/book1.jpg";
import book2 from "../../assets/buku/book2.jpg";
import book3 from "../../assets/buku/book3.jpg";
import book4 from "../../assets/buku/book4.jpg";
import Header from "../../components/header";

import StatCard from "../../components/statcard";
import ImgBook from "../../assets/imgbook.png";
import Title from "../../components/title";
import ImgUser from "../../assets/imguser.png";
import UserActive from "../../assets/useractive.png";
import BookCard from "../../components/bookcard";

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      {/* HERO SECTION */}
      <section className="bg-blue-50 py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <Title>Temukan Buku Disini</Title>

            <p className="text-gray-600 mb-6">
              Akses ribuan koleksi buku akademik dan literatur terbaru untuk
              mendukung kegiatan belajar Anda.
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="Cari buku..."
                className="border px-4 py-3 rounded-l-lg w-full"
              />

              <button className="bg-blue-600 text-white px-6 rounded-r-lg">
                Cari
              </button>
            </div>
          </div>

          <img src={heroImg} alt="library" />
        </div>
      </section>

      {/* STATISTIK */}
      <section className="py-16 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Buku"
            value="1,245"
            image={ImgBook}
            color="bg-green-400"
          />
          <StatCard
            title="Anggota"
            value="1,245"
            image={ImgUser}
            color="bg-red-400"
          />
          <StatCard
            title="Peminjam Aktif"
            value="1,245"
            image={UserActive}
            color="bg-yellow-400"
          />
          <StatCard
            title="Buku Baru"
            value="1,245"
            image={ImgBook}
            color="bg-pink-400"
          />
        </div>
      </section>

      {/* BUKU POPULER */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Title>Buku Populer</Title>

          <div className="grid  md:grid-cols-4 grid-cols-2 gap-6">
            <BookCard
              title="Clean Code"
              author="Robert C. Martin"
              image={book1}
            />

            <BookCard
              title="Artificial Intelligence"
              author="Stuart Russell"
              image={book2}
            />

            <BookCard title="Database System" author="Elmasri" image={book3} />

            <BookCard
              title="Algoritma"
              author="Thomas H.Cormen"
              image={book4}
            />
          </div>
        </div>
      </section>

      {/* CARA MEMINJAM */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Cara Meminjam Buku
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Cari Buku</h3>
              <p className="text-gray-600 text-sm">
                Gunakan fitur pencarian untuk menemukan buku.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">2. Ajukan Pinjam</h3>
              <p className="text-gray-600 text-sm">
                Klik tombol pinjam pada buku yang dipilih.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3. Ambil Buku</h3>
              <p className="text-gray-600 text-sm">
                Ambil buku di perpustakaan sesuai jadwal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4. Kembalikan</h3>
              <p className="text-gray-600 text-sm">
                Kembalikan sebelum jatuh tempo untuk menghindari denda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Testimoni Anggota</h2>

          <p className="text-gray-600 italic mb-4">
            "Perpustakaan ini sangat membantu saya menemukan referensi untuk
            tugas kuliah."
          </p>

          <h4 className="font-semibold">Andi - Mahasiswa Informatika</h4>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-10 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">Perpustakaan Digital</h3>
            <p className="text-gray-400 text-sm">
              Sistem perpustakaan untuk memudahkan mahasiswa dalam mencari dan
              meminjam buku.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Menu</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Home</li>
              <li>Katalog Buku</li>
              <li>Cara Meminjam</li>
              <li>Pengumuman</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Kontak</h3>
            <p className="text-gray-400 text-sm">
              Email: perpustakaan@email.com
            </p>
            <p className="text-gray-400 text-sm">Telp: 08123456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

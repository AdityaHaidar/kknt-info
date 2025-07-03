import React from 'react';
import { MessageCircle, Users, Heart, Clock } from 'lucide-react';

function KesiapanRelasional() {
  return (
    <section id="rumahTangga" className="px-4 md:px-16 py-12 bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Kesiapan Relasional
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Pondasi kuat untuk keluarga bahagia dimulai dari kesiapan relasional yang matang. 
          Bukan hanya soal cinta, tapi kemampuan bekerja sama sebagai tim yang solid.
        </p>
      </div>

      {/* Introduction Text */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Halo Pasangan Hebat! 💕
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Perjalanan berkeluarga penuh tantangan dan perubahan. Dengan kesiapan relasional yang baik, 
            kalian akan lebih mudah beradaptasi, mengatasi konflik tanpa merusak hubungan, 
            dan saling mendukung di setiap fase kehidupan.
          </p>
        </div>
      </div>

      {/* Main Title for Cards */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Tiga Pondasi Penting dalam Hubungan Pasangan
        </h3>
        <p className="text-lg text-gray-600">
          Bangun hubungan yang harmonis dan sehat dengan memahami ketiga aspek fundamental ini
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Komunikasi Terbuka Card - Featured */}
        <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] text-white p-8 rounded-3xl relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold mb-2">Komunikasi</h4>
              <h4 className="text-2xl font-bold">Terbuka</h4>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl">
              <MessageCircle size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Kunci memahami satu sama lain. Saling mendengar secara aktif dan memberi umpan balik 
            tanpa menyalahkan. Gunakan kalimat "Saya merasa..." daripada "Kamu selalu...".
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2">Tips Praktis:</h5>
            <ul className="text-sm space-y-1 text-white/80">
              <li>• Luangkan waktu khusus untuk bicara berdua</li>
              <li>• Latih diri untuk mendengarkan, bukan menunggu giliran</li>
              <li>• Hindari asumsi, tanyakan langsung</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-white text-[#0798C5] font-semibold transition duration-200 hover:bg-blue-50 hover:scale-105">
            Pelajari Lebih Lanjut
          </button>
        </div>

        {/* Pembagian Peran Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Pembagian</h4>
              <h4 className="text-2xl font-bold text-gray-800">Peran & Harapan</h4>
            </div>
            <div className="bg-[#0798C5] p-4 rounded-2xl">
              <Users size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-600 leading-relaxed">
            Menentukan arah bersama dengan mendiskusikan peran dan harapan masing-masing. 
            Dari pengelolaan keuangan hingga pengasuhan anak kelak.
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2 text-gray-800">Contoh Diskusi:</h5>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Harapan tentang keluarga di masa depan</li>
              <li>• Nilai yang ingin ditanamkan</li>
              <li>• Pembagian peran pengasuhan</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#0798C5] text-white font-semibold transition duration-200 hover:bg-blue-600 hover:scale-105">
            Mulai Diskusi
          </button>
        </div>

        {/* Resolusi Konflik Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Resolusi</h4>
              <h4 className="text-2xl font-bold text-gray-800">Konflik Sehat</h4>
            </div>
            <div className="bg-[#0798C5] p-4 rounded-2xl">
              <Heart size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-600 leading-relaxed">
            Berproses menuju solusi dengan fokus pada pencarian jalan keluar, 
            bukan mencari siapa yang menang atau kalah.
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2 text-gray-800">Strategi Efektif:</h5>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Ambil jeda saat emosi memuncak</li>
              <li>• Fokus pada masalah, bukan pribadi</li>
              <li>• Cari solusi win-win</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#0798C5] text-white font-semibold transition duration-200 hover:bg-blue-600 hover:scale-105">
            Praktikkan
          </button>
        </div>
      </div>

      {/* Additional Feature Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-pink-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Kesiapan Relasional Assessment
              </h4>
              <p className="text-lg text-gray-600">
                Evaluasi tingkat kesiapan relasional kalian berdua dengan tools interaktif
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-2xl">
              <Clock size={32} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              Mulai Assessment
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-pink-400 text-pink-600 font-semibold transition duration-200 hover:bg-pink-50 hover:scale-105">
              Panduan Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Investasi Terbaik untuk Masa Depan Keluarga 🌟
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dengan membangun koneksi yang kuat dan harmonis, kalian tidak hanya menyiapkan diri 
            untuk hidup berdua, tapi juga untuk jadi orang tua yang hebat. Ini adalah investasi 
            terbaik untuk kesehatan, kebahagiaan, dan masa depan gemilang keluarga kalian.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            Mari kita terus belajar dan tumbuh bersama! 💪
          </p>
        </div>
      </div>
    </section>
  );
}

export default KesiapanRelasional;
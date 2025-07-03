import { IoIosBookmarks } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { LuAlarmClock } from "react-icons/lu";

function StressManagement() {
  return (
    <section id="parenting" className="px-16 py-45 bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Pengelolaan Stres untuk Harmoni Keluarga
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Hidup berpasangan penuh warna dengan momen indah dan tantangan baru. Stres adalah bagian alami dari kehidupan, 
          namun cara kita mengelolanya yang menentukan keharmonisan hubungan dan kesejahteraan keluarga.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl max-w-4xl mx-auto">
          <p className="text-gray-700 text-md leading-relaxed">
            <strong>Tahukah Anda?</strong> Stres yang tidak dikelola dengan baik dapat mempengaruhi kesehatan kehamilan, 
            perkembangan janin, dan bahkan meningkatkan risiko stunting pada anak. Pengelolaan stres yang tepat adalah 
            investasi terbaik untuk masa depan keluarga yang sehat dan bahagia.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mindful Breathing Card - Featured */}
        <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] text-white p-6 rounded-3xl relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Mindful</h3>
              <h3 className="text-xl font-bold">Breathing</h3>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl">
              <IoIosBookmarks className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-white/90">
            Pelajari teknik pernapasan sadar untuk menenangkan sistem saraf, mengurangi kecemasan, 
            dan meningkatkan fokus saat menghadapi situasi stres.
          </p>
          <button className="px-6 py-2 rounded-full bg-white text-[#0798C5] text-sm transition duration-200 hover:bg-white hover:text-[#0798C5] border-2 border-transparent hover:border-[#0798C5] cursor-pointer">
            Mulai Latihan
          </button>
        </div>

        {/* Komunikasi Jujur Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Komunikasi</h3>
              <h3 className="text-xl font-bold text-gray-800">Jujur</h3>
            </div>
            <div className="bg-[#0798C5] p-3 rounded-2xl">
              <FaUserFriends className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Ungkapkan perasaan secara terbuka tanpa menghakimi. Bangun rasa saling percaya 
            dan cegah kesalahpahaman untuk menjaga keharmonisan hubungan.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#0798C5] text-white text-sm transition duration-200 hover:bg-white hover:text-[#0798C5] border-2 border-transparent hover:border-[#0798C5] cursor-pointer">
            Pelajari Tips
          </button>
        </div>

        {/* Me-Time & Us-Time Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Me-Time &</h3>
              <h3 className="text-xl font-bold text-gray-800">Us-Time</h3>
            </div>
            <div className="bg-[#0798C5] p-3 rounded-2xl">
              <RiTeamFill className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Buat rutinitas waktu sendiri untuk hobi dan istirahat, serta waktu berkualitas 
            berdua untuk memperkuat ikatan emosional dan mencegah burnout.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#0798C5] text-white text-sm transition duration-200 hover:bg-white hover:text-[#0798C5] border-2 border-transparent hover:border-[#0798C5] cursor-pointer">
            Atur Jadwal
          </button>
        </div>

        {/* Tetapkan Batasan Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Tetapkan</h3>
              <h3 className="text-xl font-bold text-gray-800">Batasan</h3>
            </div>
            <div className="bg-[#0798C5] p-3 rounded-2xl">
              <LuAlarmClock className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Diskusikan dan sepakati batasan yang jelas dengan keluarga besar, pekerjaan, 
            atau penggunaan gadget untuk mengurangi tekanan eksternal.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#0798C5] text-white text-sm transition duration-200 hover:bg-white hover:text-[#0798C5] border-2 border-transparent hover:border-[#0798C5] cursor-pointer">
            Panduan
          </button>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ingat, Stres Adalah Bagian dari Hidup
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Yang terpenting adalah cara kita mengelolanya. Dengan komunikasi yang baik, dukungan satu sama lain, 
            dan teknik yang tepat, Anda bisa menghadapi setiap tantangan dan membangun keluarga yang harmonis.
          </p>
          <button className="px-8 py-3 bg-[#0798C5] text-white rounded-full text-lg font-semibold hover:bg-[#0678A3] transition duration-200">
            Mulai Perjalanan Harmoni Keluarga
          </button>
        </div>
      </div>
    </section>
  );
}

export default StressManagement;
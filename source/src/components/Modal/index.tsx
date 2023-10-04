import React from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Modal: React.FC<Props> = () => {
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>

      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="bg-[#D9D9D9] max-w-[1000px]">
          <div className="flex justify-end">
            <button className="w-[30px] h-[30px] flex items-center justify-center m-[17px] bg-white rounded-full drop-shadow-xl">
              <span className="font-bold text-black">X</span>
            </button>
          </div>
          {/* content */}
          <div className="bg-[#D9D9D9] px-[99px] py-[96px] ">
            <p className="text-[20px] font-poppins font-bold text-black text-center">#1 - BBB: Bukan Baca Biasa</p>
            <p className="font-poppins text-[12px] leading-[30px] text-black mt-[46px]">
              Selamat datang di level 'BBB: Bukan Baca Biasa!', Zie! <br></br> Apakah kamu siap menjadi pembaca yang tajam dan kritis? 📚 Level ini berkaitan dengan pengembangan keterampilanmu untuk bijak menanggapi serta membedakan antara
              berita palsu dan berita yang benar. Misimu adalah mencapai skor minimal 70 untuk membuka level berikutnya. Kamu tetap bebas keluar dari kuis kapan saja, tetapi ingatlah bahwa progres pengerjaan tidak akan disimpan.
              <br />
              <br />
              Siap untuk memulai perjalananmu dan menamatkan tantangan ini? Tantangan sebenarnya sudah ada di depan mata, jadi klik 'Mulai' dan bersiaplah untuk menguji keterampilanmu sekarang. Semoga berhasil!
            </p>
            <div className="flex justify-between items-center mt-[93px]">
              <button className="bg-white drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]">
                <p className="font-inter text-black">Kembali</p>
              </button>
              <button className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]">
                <p className="font-inter text-black">Mulai</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

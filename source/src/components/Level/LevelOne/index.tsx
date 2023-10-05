import quizStore from "../../../../store/quizStore";
import modalStore from "../../../../store/modalStore";

import Question from "./Question";
import questions from "../../../utils/quizDummyData";

const LevelOne = () => {
  const { closeModal } = modalStore();
  const { status, startQuiz, index } = quizStore();

  if (status === "steady") {
    return (
      <div className="bg-[#D9D9D9] px-[99px] py-[96px] rounded-[20px]">
        <p className="text-[20px] font-poppins font-bold text-black text-center">
          #1 - BBB: Bukan Baca Biasa
        </p>
        <p className="font-poppins text-[12px] leading-[30px] text-black mt-[46px]">
          Selamat datang di level 'BBB: Bukan Baca Biasa!', Zie! <br></br>{" "}
          Apakah kamu siap menjadi pembaca yang tajam dan kritis? 📚 Level ini
          berkaitan dengan pengembangan keterampilanmu untuk bijak menanggapi
          serta membedakan antara berita palsu dan berita yang benar. Misimu
          adalah mencapai skor minimal 70 untuk membuka level berikutnya. Kamu
          tetap bebas keluar dari kuis kapan saja, tetapi ingatlah bahwa progres
          pengerjaan tidak akan disimpan.
          <br />
          <br />
          Siap untuk memulai perjalananmu dan menamatkan tantangan ini?
          Tantangan sebenarnya sudah ada di depan mata, jadi klik 'Mulai' dan
          bersiaplah untuk menguji keterampilanmu sekarang. Semoga berhasil!
        </p>
        <div className="flex justify-between items-center mt-[93px]">
          <button
            className="bg-white drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
            onClick={() => closeModal()}
          >
            <p className="font-inter text-black">Kembali</p>
          </button>
          <button
            className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
            onClick={() => startQuiz()}
          >
            <p className="font-inter text-black">Mulai</p>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <Question
        question={questions[index].question}
        image={questions[index].image}
        options={questions[index].options}
      />
    );
  }
};

export default LevelOne;

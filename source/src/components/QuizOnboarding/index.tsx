import LevelOption from "../LevelOption";
import modalStore from "../../../store/modalStore";

import levelOptionText from "../../../data/levelOptionText";

import userStore from "../../../store/userStore";

const QuizOnboarding = () => {
  const { openModal } = modalStore();
  const { userLevel, username } = userStore();

  const progressCalculate = userLevel * 20;
  const progress = progressCalculate.toString();

  return (
    <div className="mb-20 flex max-w-[1000px] flex-col items-center gap-5 px-4 text-justify md:mb-0 md:gap-10 md:px-7 md:text-left">
      <h1 className="font-rowdies text-[30px] font-bold text-black md:text-[50px]">
        Hoax Quizzes
      </h1>
      <progress
        className="progress progress-accent w-full"
        value={progress}
        max="100"
      ></progress>
      <p className="font-poppins text-[12px] leading-[30px]">
        Selamat datang di <span className="text-[#F94C10]">Hoax Quizzes</span>,{" "}
        {username} <br></br> Sudah siap menjelajahi dunia tipuan digital? Mari
        uji kemahiran digitalmu. 🚀 Di era digital saat ini, kemampuan untuk
        mengenali hoaks adalah sebuah kekuatan super! Di sini, kamu akan menguji
        dan meningkatkan kemampuanmu dalam mengidentifikasi hoaks, memahami
        penipuan online, dan menjaga keamanan data pribadi milikmu. Bersiaplah
        untuk menjadi salah satu dari ahli digital lainnya! Ingatlah,
        pengetahuan adalah kunci untuk bertahan terhadap hoaks. Apakah kamu siap
        untuk tantangan ini? Mari kita mulai perjalanan ini bersama-sama.
        Selamat belajar!
      </p>
      <div className="flex w-full flex-col gap-[20px]">
        {levelOptionText.map((item) => (
          <LevelOption
            level={item.level}
            onClick={() => openModal(item.level)}
            active={userLevel === item.level}
            isPassed={userLevel >= item.level}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizOnboarding;

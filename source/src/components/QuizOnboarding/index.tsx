import LevelOption from "../LevelOption";
import modalStore from "../../../store/modalStore";

import levelOptionText from "../../../data/levelOptionText";

import userStore from "../../../store/userStore";

const QuizOnboarding = () => {
  const { openModal } = modalStore();
  const { userLevel } = userStore();

  const progressCalculate = userLevel * 20;
  const progress = progressCalculate.toString();

  return (
    <div className="mb-20 flex w-[846px] flex-col items-center gap-5 px-4 text-justify md:mb-0 md:gap-10 md:px-7 md:text-left">
      <h1 className="font-rowdies text-[40px] font-bold text-black md:text-[50px]">
        Hoax Quizzes
      </h1>
      <progress
        className="progress progress-accent w-full"
        value={progress}
        max="100"
      ></progress>
      <p className="font-poppins text-[12px] leading-[30px]">
        Welcome to Hoax Quizzes <br></br> Ready to dive into the world of
        digital deception? Let's challenge your digital savvy. 🚀 In today's
        digital age, the ability to spot a hoax is a superpower! Over here,
        you'll test and boost your skills in identifying hoaxes, understanding
        online scams, and securing your personal data. Get ready to become a
        digital whiz! Through this course, you'll emerge as a smarter internet
        user. Remember, knowledge is the key to staying hoax-resistant. Are you
        up for the challenge? Let's kickstart this learning journey together.
        Happy learning!
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

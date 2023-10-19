import LevelOption from "../LevelOption";
import modalStore from "../../../store/modalStore";

const Quiz = () => {
  const { openModal } = modalStore();
  return (
    <div className="flex w-[846px] flex-col items-center gap-10">
      <h1 className="font-rowdies text-[50px] font-bold text-black">
        Hoax Quizzes
      </h1>
      <progress
        className="progress progress-accent w-full"
        value="50"
        max="100"
      ></progress>
      <p className="font-poppins text-[12px] leading-[30px]">
        Welcome to Hoax Quizzes, Zie! <br></br> Ready to dive into the world of
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
        <LevelOption
          onClick={() => openModal(1)}
          active={true}
          text={"Level 1"}
        />
        <LevelOption
          onClick={() => openModal(2)}
          active={true}
          text={"Level 2"}
        />
        <LevelOption
          onClick={() => openModal(3)}
          active={true}
          text={"Level 3"}
        />
        <LevelOption
          onClick={() => openModal(4)}
          active={true}
          text={"Level 4"}
        />
        <LevelOption active={false} text={"Level 5"} />
      </div>
    </div>
  );
};

export default Quiz;

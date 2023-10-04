import LevelOptions from '../LevelOptions';
import modalStore from '../../../store/modalStore';

const Quiz = () => {
  const { openModal } = modalStore();
  return (
    <div className="w-[846px] flex flex-col items-center gap-10">
      <h1 className="text-[50px] font-rowdies font-bold text-black">Hoax Quizzes</h1>
      <progress className="progress progress-accent w-full" value="50" max="100"></progress>
      <p className="font-poppins text-[12px] leading-[30px]">
        Welcome to Hoax Quizzes, Zie! <br></br> Ready to dive into the world of digital deception? Let's challenge your digital savvy. 🚀 In today's digital age, the ability to spot a hoax is a superpower! Over here, you'll test and boost
        your skills in identifying hoaxes, understanding online scams, and securing your personal data. Get ready to become a digital whiz! Through this course, you'll emerge as a smarter internet user. Remember, knowledge is the key to
        staying hoax-resistant. Are you up for the challenge? Let's kickstart this learning journey together. Happy learning!
      </p>
      <div className="flex flex-col gap-[20px] w-full">
        <LevelOptions onClick={() => openModal()} active={true} text={'#1 - Be a Good Reader'} />
        <LevelOptions active={false} text={'Level 2'} />
        <LevelOptions active={false} text={'Level 3'} />
        <LevelOptions active={false} text={'Level 4'} />
        <LevelOptions active={false} text={'Level 5'} />
      </div>
    </div>
  );
};

export default Quiz;

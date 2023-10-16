import { create } from "zustand";
import { persist } from "zustand/middleware";

type Question = {
  id: number;
  type: string;
  level: number;
  question: string;
  option: string[];
  image?: string;
};

type Store = {
  quiz: Question[];
  status: string;
  index: number;
  passed: boolean | null;
  answers: string[] | Array<string[]>;
  addQuiz: (quiz: Question[]) => void;
  startQuiz: () => void;
  setPassedResult: (result: boolean) => void;
  nextQuestion: () => void;
  setAnswer: (answer: string) => void;
  setAnswerMultiple: (answer: string) => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
};

const quizStore = create<Store>()(
  persist(
    (set, get) => ({
      quiz: [],
      status: "steady",
      index: 0,
      passed: null,
      answers: [],
      addQuiz: (quiz) => set({ quiz: quiz }),
      startQuiz: () => set({ status: "start" }),
      setPassedResult: (result: boolean) => set({ passed: result }),
      nextQuestion: () =>
        set((state) => ({
          index: state.index + 1,
        })),
      setAnswer: (answer: string) => {
        const dataAnswer = get().answers;
        const currentIndex = get().index;
        dataAnswer[currentIndex] = answer;
        set({ answers: dataAnswer });
      },
      setAnswerMultiple: (answer: string) => {
        const temp = [];
        const dataAnswer = get().answers;
        const currentIndex = get().index;

        if (!dataAnswer[currentIndex]) {
          temp.push(answer);
          dataAnswer.push(temp);
        } else if (!dataAnswer[currentIndex].includes(answer)) {
          dataAnswer[currentIndex].push(answer);
        } else {
          dataAnswer[currentIndex].splice(
            dataAnswer[currentIndex].indexOf(answer),
            1,
          );
        }

        set({ answers: dataAnswer });
      },
      submitQuiz: () => set({ status: "finished" }),
      restartQuiz: () => set({ index: 0, status: "steady", answers: [] }),
    }),
    {
      name: "quiz",
    },
  ),
);

export default quizStore;

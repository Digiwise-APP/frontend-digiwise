import { create } from "zustand";
import { persist } from "zustand/middleware";

import { QuestionData } from "../src/types/quiz";

type Store = {
  quiz: QuestionData[];
  status: string;
  index: number;
  passed: boolean;
  answers: string[] | [string[]];
  setStatus: (status: string) => void;
  addQuiz: (quiz: QuestionData[]) => void;
  startQuiz: () => void;
  setPassedResult: (score: number) => void;
  nextQuestion: () => void;
  setAnswer: (answer: string) => void;
  setAnswerMultiple: (answer: string) => void;
  restartQuiz: () => void;
};

const quizStore = create<Store>()(
  persist(
    (set, get) => ({
      quiz: [],
      status: "steady",
      index: 0,
      passed: false,
      answers: [],
      setStatus: (status) => set({ status: status }),
      addQuiz: (quiz) => set({ quiz: quiz }),
      startQuiz: () => set({ status: "start" }),
      setPassedResult: (score) => {
        if (score >= 80){
          set({ passed : true })
        } else{
          set({ passed: false })
        }
      },
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
      restartQuiz: () => set({ index: 0, status: "steady", answers: [] }),
    }),
    {
      name: "quiz",
    },
  ),
);

export default quizStore;

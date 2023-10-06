import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Question = {
  id?: string;
  level?: number;
  image: string;
  question: string;
  options: {
    [key: string]: string;
  };
  question_type?: string;
};

type Store = {
  quiz: Question[] | [];
  status: string;
  index: number;
  passed: boolean | null;
  answers: string[] | [];
  addQuiz: (quiz: Question[]) => void;
  startQuiz: () => void;
  setResult: (result: boolean) => void;
  nextQuestion: () => void;
  setAnswer: (answerChoosen: string) => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
};

const quizStore = create<Store>()(
  persist(
    (set) => ({
      quiz: [],
      status: 'steady',
      index: 0,
      passed: null,
      answers: [],
      addQuiz: (quiz) => set({ quiz: quiz }),
      startQuiz: () => set({ status: 'start' }),
      setResult: (result: boolean) => set({ passed: result }),
      nextQuestion: () =>
        set((state) => ({
          index: state.index + 1,
        })),
      setAnswer: (answerChoosen: string) =>
        set((state) => ({
          answers: [...state.answers, answerChoosen],
        })),
      submitQuiz: () => set({ status: 'finished' }),
      restartQuiz: () => set({ index: 0, status: 'steady', answers: [] }),
    }),
    {
      name: 'quiz',
    }
  )
);

export default quizStore;

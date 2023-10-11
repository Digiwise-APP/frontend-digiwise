import { create } from 'zustand';
import { persist } from 'zustand/middleware';


type Question = {
  id?: string;
  level?: number;
  question: string;
  question_type?: string;
}

interface QuestionLevelOne extends Question  {
  image: string;
  options: {
    [key: string]: string;
  };

};

interface QuestionLevelTwo extends Question  {
  imageOptionOne:string,
  imageOptionTwo:string
}

type Quiz = QuestionLevelOne | QuestionLevelTwo

type Store = {
  quiz: Quiz[]
  status: string;
  index: number;
  passed: boolean | null;
  answers: string[] | [];
  addQuiz: (quiz : Quiz[] ) => void;
  startQuiz: () => void;
  setPassedResult: (result: boolean) => void;
  nextQuestion: () => void;
  setAnswer: (answerChoosen: string) => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
};

const quizStore = create<Store>()(
  persist(
    (set,get) => ({
      quiz: [],
      status: 'steady',
      index: 0,
      passed: null,
      answers: [],
      addQuiz: (quiz) => set({ quiz: quiz }),
      startQuiz: () => set({ status: 'start' }),
      setPassedResult: (result: boolean) => set({ passed: result }),
      nextQuestion: () =>
        set((state) => ({
          index: state.index + 1,
        })),
      setAnswer: (answerChoosen: string) => { 
        const oldAnswer = get().answers
        const currentIndex = get().index
        oldAnswer[currentIndex] = answerChoosen
        set({answers: oldAnswer})
      },
      submitQuiz: () => set({ status: 'finished' }),
      restartQuiz: () => set({ index: 0, status: 'steady', answers: [] }),
    }),
    {
      name: 'quiz',
    }
  )
);

export default quizStore;

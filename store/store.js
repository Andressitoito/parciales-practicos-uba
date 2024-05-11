import { create } from 'zustand';

const useStore = create((set) => ({
  questionsData: null,
  setQuestionsData: (data) => set({ questionsData: data }),
}));

export default useStore;
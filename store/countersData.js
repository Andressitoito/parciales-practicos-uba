import { create } from 'zustand';

const countersData = create((set) => ({
 countersData: null,
 setCountersData: (data) => set({ countersData: data }),
 }));

export default countersData;

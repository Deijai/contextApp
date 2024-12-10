import { create } from "zustand";

export interface CounterState {
    count: number;
    increase: (value: number) => void;
}


export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 0,
    increase: (value) => {
        set((state) => ({ count: state.count + value }))
    }
}));



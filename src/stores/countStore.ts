import { create } from "zustand";
import { devtools  } from 'zustand/middleware';

interface countState {
  count: number,
  increment: () => void
}

export const useCounterStore = create<countState>()(
    devtools(
        (set) => ({
            count: 0,
            increment: () => {
                set(state => ({count: state.count + 1}))
            }
        }), { name: "CounterStore" }
    )
)
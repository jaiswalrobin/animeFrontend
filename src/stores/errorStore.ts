import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ErrorState } from "@/types";
import { useAppStore } from "./appStore";

const useErrorStore = create<ErrorState>()(
  devtools(
    (set) => ({
      error: null,
      setError: (error: string) => set({ error }),
      resetError: () => set({ error: null }),
      handleUnauthorized: () => {
        set({ error: null });
        const {resetAllStores} = useAppStore.getState()
        resetAllStores()
      },
      handleForbidden: () => {
        set({ error: null });
      },
      handleOtherErrors: (error: string) => {
        set({ error });
      },
    }),
    {
      name: "errorStore",
    }
  )
);

console.log("useErrorStore created:", useErrorStore.getState());

export default useErrorStore;

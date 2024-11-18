import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import axiosClient from "@/services/http";
import { AxiosError } from "axios";
import { UserState } from "@/types";

const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
        _hasHydrated: false,
        userProfile: null,
        // Action to update hydration state
        setUserState: (state) => set({ userProfile: state ? state : null }),
        setHasHydrated: (state) => set({ _hasHydrated: state }),
        resetState: () => set({userProfile: null }, false, "resetUserState"),

        getUser: async (id: string) => {
            set((state) => ({ ...state, isLoading: true }), false, "user-fetch/start");
                try {
                const response = await axiosClient.get(`/user/${id}`);
    
                const data = response.data;
                console.log(data, 'user-data-aaya', )
                set((state) => ({ ...state, userProfile: data }), false, "user-fetch/success");
                } catch (error) {
                const err = error as AxiosError;
                set((state) => ({ ...state }), false, "user-fetch/error");
                throw err
                }
            },
        }),
        {
            name: "user",
            onRehydrateStorage: (state) => {
            // Set `_hasHydrated` to true after hydration completes
            return () => state?.setHasHydrated(true);
            },
        },
  )
);

console.log("useUserStore created:", useUserStore.getState());

export default useUserStore;
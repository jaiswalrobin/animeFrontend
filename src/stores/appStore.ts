import { create } from "zustand";
import useAuthStore from "./authStore";
import useErrorStore from "./errorStore";
import useUserStore from "./userStore";

interface AppState {
  resetAllStores: () => void
}

const useAppStore = create<AppState>(() => ({
  resetAllStores: () => {
    const { logout, user } = useAuthStore.getState();
    const {resetState} = useUserStore.getState()
    const { resetError } = useErrorStore.getState();

    
    if (logout && user) logout();
    resetState();
    resetError()
  },
}));

export { useAppStore };

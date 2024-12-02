import { create } from "zustand";
import useAuthStore from "./authStore";
import useErrorStore from "./errorStore";
import useUserStore from "./userStore";

interface AppState {
  resetAllStores: () => void
}

const useAppStore = create<AppState>(() => ({
  resetAllStores: () => {
    // Reset individual stores by calling their reset methods
    const { logout } = useAuthStore.getState();
    const {resetState} = useUserStore.getState()
    const { resetError } = useErrorStore.getState();

    // Call reset functions for each store
    if (logout) logout();
    resetState(); // Clears the error store
    resetError()
  },
}));

export { useAppStore };

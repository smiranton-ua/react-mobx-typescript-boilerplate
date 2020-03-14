import { useStores } from 'src/hooks/stores';

export const useAuthStore = () => {
  const { authStore } = useStores();
  return authStore;
};

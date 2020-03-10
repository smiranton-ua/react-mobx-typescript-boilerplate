import { useStores } from 'src/hooks/stores';

export const useModule1Store = () => {
  const { module2Store } = useStores();
  return module2Store;
};

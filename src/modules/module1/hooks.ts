import { useStores } from 'src/hooks/stores';

export const useModule1Store = () => {
  const { module1Store } = useStores();
  return module1Store;
};

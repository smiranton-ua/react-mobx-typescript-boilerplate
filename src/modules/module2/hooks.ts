import { useStores } from '../../state/stores/hooks';

export const useModule1Store = () => {
  const { module2Store } = useStores();
  return module2Store;
}

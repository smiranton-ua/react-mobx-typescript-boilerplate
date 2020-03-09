import { useStores } from '../../state/stores/hooks';

export const useModule1Store = () => {
  const { module1Store } = useStores();
  return module1Store;
}

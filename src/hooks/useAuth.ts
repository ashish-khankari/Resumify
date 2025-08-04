import {useAppSelector} from './useRedux';

export const useAuth = () => {
  const {user} = useAppSelector(state => state);
  const token = user?.token;
  const userData = user?.res;

  return {
    token,
    userData,
  };
};

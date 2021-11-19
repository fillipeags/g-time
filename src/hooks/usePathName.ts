import { useLocation } from 'react-router-dom';

const usePathName = (): string => {
  const location = useLocation();
  return location.pathname;
};

export default usePathName;

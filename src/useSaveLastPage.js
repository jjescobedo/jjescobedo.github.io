import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useSaveLastPage() {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastPage', window.location.href);
  }, [location]);
}

export default useSaveLastPage;
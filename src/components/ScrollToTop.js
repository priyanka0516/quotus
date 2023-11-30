import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function ScrollToTop() {
  const  location  = useLocation();
  console.log(location )
  useEffect(() => {
    window.scrollTo(0, 0
    )
  }, [location])
    return null;
}

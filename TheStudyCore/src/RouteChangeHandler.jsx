// RouteChangeHandler.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Loader from './components/Loding/loding';

const RouteChangeHandler = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // simulate loading delay (can also wait for actual data in future)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 1s delay

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
};

export default RouteChangeHandler;

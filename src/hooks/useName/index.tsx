import { useState, useCallback, useEffect } from 'react';

export const useName = () => {
  const [name, setName] = useState('taro');

  const handleClick = useCallback(() => {
    setName(name + ' san');
  }, [name]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return name;
};

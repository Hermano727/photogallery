import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  // Ensure that we do not run if the file is undefined or null
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);


  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  );
};

export default ProgressBar;

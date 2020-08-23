import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  return videos;
};

export default useInitialState;

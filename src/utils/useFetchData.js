import { useEffect, useState } from "react";

const useFetchData = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return { data, loading, error }; 
};

export default useFetchData;

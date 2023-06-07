import { useEffect, useState } from "react";

export const useGetQuote = (url) => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setQuote(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    quote,
    loading
  };
};

import { useEffect, useState } from "react";

export const useGenerateNumber = (data) => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * data);
    setRandomNumber(randomNum);
  };

  useEffect(() => {
    generateRandomNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    randomNumber,
    generateRandomNumber,
  };
};

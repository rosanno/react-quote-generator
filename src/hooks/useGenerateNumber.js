import { useEffect, useState } from "react";

export const useGenerateNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 30);
    setRandomNumber(randomNum);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return {
    randomNumber,
    generateRandomNumber,
  };
};

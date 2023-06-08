/* eslint-disable react/prop-types */
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import Loader from "./Loader";

const Card = (props) => {
  const { randomNumber, generateRandomNumber } = useGenerateNumber();

  return (
    <div className="bg-white shadow-lg rounded-md w-[650px] h-auto px-6 py-10 flex flex-col justify-center items-center">
      {props.loading ? (
        <Loader />
      ) : (
        <>
          {props?.quotes && (
            <div className="text-center">
              <h1 className="text-3xl font-semibold">
                &#8220;{props?.quotes[randomNumber].quote}&#8221;
              </h1>
              <p className="mt-3 text-sm italic">
                {props?.quotes[randomNumber].author}
              </p>
              <button
                onClick={generateRandomNumber}
                className="mt-20 bg-rose-700 hover:bg-red-800 transition-colors duration-300 text-white p-2 rounded-md"
              >
                Generate Quote
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;

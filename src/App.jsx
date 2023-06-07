import Card from "./components/Card";
import { useGetQuote } from "./hooks/useGetQuote";

const App = () => {
  const { quote, loading } = useGetQuote("https://dummyjson.com/quotes");

  return (
    <div className="bg-slate-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <Card {...quote} loading={loading} />
    </div>
  );
};

export default App;

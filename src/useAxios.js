import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now()); //겹치지 않는 랜덤숫자 발생
  };
  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state, //...state는 기존것은 그대로 두기 위함
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`Loding: ${loading}, Data: ${data}, Error: ${error}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;

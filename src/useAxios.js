import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, []);
  return state;
};

function App() {
  const { loading, data, error } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`Loding: ${loading}, Data: ${data}, Error: ${error}`);
  return <div>Hello</div>;
}

export default App;

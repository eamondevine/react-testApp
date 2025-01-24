import { useState, useEffect } from "react";

//<T,> established to be of generic type, meaning object shape can be flexible for later use
const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null); //the generic type ref here
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Couldn't fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setError(err.message);
        setIsPending(false);
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

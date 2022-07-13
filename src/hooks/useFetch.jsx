import { useEffect, useState } from "react";

const useFetch = (all, id) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = all
    ? `https://fakestoreapi.com/products`
    : `https://fakestoreapi.com/products/${id}`;

  const getData = async (id) => {
    const data = await fetch(url);
    setData(await data.json());
    setIsLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, []);

  return [data, isLoading];
};

export default useFetch;

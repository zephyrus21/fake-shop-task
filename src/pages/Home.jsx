import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [data, isLoading] = useFetch(true);

  return (
    <div>
      {isLoading ? (
        <>Loading!!!</>
      ) : (
        <>
          {data.map((product) => (
            <div key={product.id}>
              <Link to={`/${product.id}`}>
                <h1>{product.title}</h1>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;

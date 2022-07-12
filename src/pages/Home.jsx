import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    setProducts(await data.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products[0] ? (
        products.map((product) => (
          <div key={product.id}>
            <Link to={`/${product.id}`}>
              <h1>{product.title}</h1>
            </Link>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;

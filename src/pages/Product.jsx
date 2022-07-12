import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  const getOneItem = async (id) => {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    setProduct(await data.json());
  };

  useEffect(() => {
    getOneItem(id);
  }, []);

  return (
    <div>
      {product.id ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Product;

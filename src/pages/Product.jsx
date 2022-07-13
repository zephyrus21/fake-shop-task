import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Product = () => {
  let { id } = useParams();
  const [data, isLoading] = useFetch(false, id);

  return (
    <div>
      {isLoading ? (
        <>Loading!!!</>
      ) : (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.price}</p>
        </>
      )}
    </div>
  );
};

export default Product;

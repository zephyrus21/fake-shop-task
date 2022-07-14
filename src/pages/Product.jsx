import { Link, useParams } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Layout from "../layout/Layout";
import useFetch from "../hooks/useFetch";

const Product = () => {
  let { id } = useParams();
  const [data, isLoading] = useFetch(false, id);

  return (
    <Layout>
      {isLoading ? (
        <div class='d-flex justify-content-center align-items-center vh-100'>
          <div class='spinner-border' role='status'></div>
        </div>
      ) : (
        <>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          <div className='py-4'>
            <Link to='/'>
              <Button variant='primary'>Back</Button>
            </Link>
          </div>
          <Stack direction='horizontal' className='justify-content-around'>
            <div class='text-center ml-6'>
              <img src={data.image} width={300} />
            </div>
            <div>
              <h4 class='box-title mt-4'>{data.title}</h4>
              <p>{data.description}</p>
              <h2 class='text-success mt-5'>${data.price}</h2>
              <button class='btn btn-primary btn-rounded'>Buy Now</button>
            </div>
          </Stack>
        </>
      )}
    </Layout>
  );
};

export default Product;

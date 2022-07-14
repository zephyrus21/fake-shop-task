import { Link, useParams } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import Layout from "../layout/Layout";
import useFetch from "../hooks/useFetch";

const Product = () => {
  let { id } = useParams();
  const [data, isLoading] = useFetch(false, id);

  if (isLoading) {
    return (
      <Layout>
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <div className='spinner-border' role='status'></div>
        </div>
      </Layout>
    );
  }

  const noOfStars = Math.round(data.rating.rate * 2) / 2;
  const noOfHalfStars = Math.ceil(noOfStars % 1);
  const noOfFullStars = Math.floor(noOfStars);
  const noOfEmptyStars = 5 - (noOfFullStars + noOfHalfStars);

  return (
    <Layout>
      <div className='py-4'>
        <Link to='/'>
          <Button variant='primary'>Back</Button>
        </Link>
      </div>
      <Stack direction='horizontal' className='justify-content-around gap-4'>
        <div className='text-center'>
          <img src={data.image} width={300} />
        </div>
        <div className='ml-6'>
          <h4 className='box-title mt-4'>{data.title}</h4>
          <p>{data.description}</p>
          <div>
            {[...Array(noOfFullStars)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} color={"#FFD43B"} />
            ))}
            {noOfHalfStars > 0 && (
              <FontAwesomeIcon icon={faStarHalfStroke} color={"#FFD43B"} />
            )}
            {[...Array(noOfEmptyStars)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} color={"#e1e1e1"} />
            ))}
            <span className=''>({data.rating.count})</span>
          </div>
          <h2 className='text-success mt-2'>${data.price}</h2>
          <button className='btn btn-primary btn-rounded'>Buy Now</button>
        </div>
      </Stack>
    </Layout>
  );
};

export default Product;

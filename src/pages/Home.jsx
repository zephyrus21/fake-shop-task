import { Link } from "react-router-dom";
import { Stack, Card, Button, Dropdown } from "react-bootstrap";

import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Layout from "../layout/Layout";

const Home = () => {
  const [data, isLoading] = useFetch(true);
  const [category, setCategory] = useState("all");

  return (
    <Layout>
      {isLoading ? (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <div className='spinner-border' role='status'></div>
        </div>
      ) : (
        <>
          <Dropdown className='py-4'>
            <Dropdown.Toggle id='dropdown-basic'>
              Category - {category}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCategory("all")}>
                all
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("men's clothing")}>
                men's clothing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("women's clothing")}>
                women's clothing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("jewelery")}>
                jewelery
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("electronics")}>
                electronics
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Stack
            gap={4}
            direction='horizontal'
            className='flex-wrap justify-content-center align-items-center py-2'>
            {data.map(
              (product) =>
                (product.category === category || category === "all") && (
                  <Card
                    key={product.id}
                    style={{ width: "16rem" }}
                    className='p-2 flex'>
                    <Card.Img variant='top ' height={220} src={product.image} />
                    <Card.Title>
                      {product.title.slice(0, 16) +
                        (product.title.length > 16 ? "..." : "")}
                    </Card.Title>
                    <Card.Text className='text-success'>
                      $ {product.price}
                    </Card.Text>
                    <Link to={`/${product.id}`}>
                      <Button variant='primary'>View Product</Button>
                    </Link>
                  </Card>
                )
            )}
          </Stack>
        </>
      )}
    </Layout>
  );
};

export default Home;

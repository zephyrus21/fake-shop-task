import { Navbar, Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Fake Shop</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

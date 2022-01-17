import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0" />
        <Button variant="outline-success">Login</Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

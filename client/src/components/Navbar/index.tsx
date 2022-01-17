import { Button, Container, Nav, Navbar } from 'react-bootstrap';

interface IProps {
  name: string;
}

const MyNavbar = ({ name }: IProps) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Dohi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>Welcome {name}</Nav.Link>
          </Nav>

          <Button variant="outline-success" className="mx-2">
            Add
          </Button>
          <Button variant="outline-danger">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import AddButton from './AddButton';

interface IProps {
  name: string;
}

const MyNavbar = ({ name }: IProps) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#">Welcome {name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          <AddButton />
          <Button
            variant="outline-danger"
            onClick={() => {
              window.open(
                `${process.env.REACT_APP_API_URL}/api/auth/logout`,
                '_self'
              );
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

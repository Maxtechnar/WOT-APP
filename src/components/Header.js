import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import { Container, ToastHeader } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Image } from 'react-bootstrap';




function Header() {
  return (
    <Navbar className="navbar navbar-light bg-black">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>World of Tanks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Поиск..."
              className="me-2"
              aria-label="Search"
            />
            <Button class="btn btn-outline-success" type="reset" >Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Header;

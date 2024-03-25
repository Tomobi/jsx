import logo from './logo.svg';
import './App.css';
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" style={{height:'80px'}} className="bg-secondary mb-5">
      <Container fluid>
        <Navbar.Brand className='text-white' href="#">
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />Tobi's Thrift store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Link</Nav.Link>
            <NavDropdown  title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-white' href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <section className="container w-100 d-flex flex-column align-items-center justify-content-center d-md-flex flex-md-row  bg-secondary p-5">
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'purple', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title style={{fontSize:'32px'}}><Name name={'Sunglasses'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$10'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="https://www.istockphoto.com/photo/isolated-sun-glasses-on-a-white-gm486598340-73215723">Image Link</Card.Link>
      </Card.Body>
    </Card>
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'purple', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title className="text-center" style={{fontSize:'32px'}}><Name name={'Cargo Pants'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$30'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="https://media.istockphoto.com/id/516895084/photo/brown-cargo-pants-in-white-studio.jpg?s=1024x1024&w=is&k=20&c=olZHY6K5qhFnizQE6u6HL0nHDiCjaBKARwe5Ef2OySU=">Image Link</Card.Link>
      </Card.Body>
    </Card>
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'purple', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title style={{fontSize:'32px'}}><Name name={'Fortnite Skin'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$5'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="https://tryhardguides.com/wp-content/uploads/2021/09/featured-fortnite-legendary-skins-1024x576.jpg">Image Link</Card.Link>
      </Card.Body>
    </Card>
        </section>
    </div>
  );
}

export default App;
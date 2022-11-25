import Container from 'react-bootstrap/Container';




const NavBar = (props) => {
    return ( 
        <div>
            <Container>
                <props.Navbar.Brand href="#home">NavBar</props.Navbar.Brand>
            </Container>
        </div>
     );
}
 
export default NavBar;
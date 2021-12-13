import { Nav ,Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const AudreNav = ()=>{
    return (
        <Navbar color="dark" container="xl" dark expand fixed="top" light>
          <NavbarBrand href="/">Audre Lorde</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink active href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/biography">B</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/biography">Biography</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    )
}
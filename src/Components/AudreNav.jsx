import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const AudreNav = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar color="dark" container="xl" dark expand fixed="top" light>
        <NavbarBrand href="/">Audre Lorde</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink active href="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="biography">Biography</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="poems">
              Poems
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="quotes">
              Quotes
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div >
  )
}
export default AudreNav
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const AudreNav = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar color="dark" container="xl" dark expand fixed="top" light>
        <NavbarBrand href="/DigitalHumanities101Final/home">Power of Audre Lorde</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink active href="/DigitalHumanities101Final/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/DigitalHumanities101Final/biography">Biography</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/DigitalHumanities101Final/poems">
              Poems
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/DigitalHumanities101Final/quotes">
              Quotes
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div >
  )
}
export default AudreNav
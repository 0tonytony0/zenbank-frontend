import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";


import {

  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";


// NavLink
const NavLink = styled.a`
  margin: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }

  &:hover:after,
  &:focus:after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.sm} 0;
    font-size: 1.1rem;
    width: 100%;
    text-align: left; /* Align menu items to the left */
  }
`;

// SubMenuWrapper
const SubMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-10px")});
  transition: opacity 0.3s ease, transform 0.3s ease;
  min-width: 100%;
  width: max-content;
  box-sizing: border-box;
`;

 

// NavLinkWithSubmenu
const NavLinkWithSubmenu = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;

  &:after {
    content: "▼";
    font-size: 0.7rem;
    margin-left: 4px;
    transition: transform 0.3s ease;
    ${({ isSubMenuOpen }) => isSubMenuOpen && `transform: rotate(180deg);`}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover ${SubMenuWrapper}, &:focus-within ${SubMenuWrapper} {
      display: flex;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;

    ${SubMenuWrapper} {
      display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? "flex" : "none")};
    }
  }
`;

// SubMenuSection
const SubMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 200px;
  max-width: 250px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 100%;
    max-width: 100%;
  }
`;

// SubMenuItem
const SubMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 6px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  max-width: 250px;
  width: 100%;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: #357d90;
    color: #ffffff;
    outline: none;
  }

  strong {
    font-size: 1rem;
    color: black;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    font-size: 0.9rem;
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: inherit;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    line-height: 1.4;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.sm};
    max-width: 100%;
    font-size: 0.95rem;

    strong {
      font-size: 0.95rem;
    }

    p {
      display: none; /* Hide description in mobile */
    }
  }
`;


const SubMenu = ({ onItemClick, isMobile }) => (
  <>
    {isMobile ? (
      // ✅ MOBILE version
      <ul style={{ listStyle: "none", paddingLeft: "1.25rem", margin: 0 }}>
        {subMenuItems.flatMap((section) =>
          section.items.map((item) => (
            <li
              key={item.title}
              style={{
                listStyleType: "none",
                listStylePosition: "outside",
                color: "white", // 🔥 Force black text
                marginBottom: "0.5rem",
              }}
            >
              <Link
                to={item.path}
                onClick={onItemClick}
                style={{ textDecoration: "none", color: "white" }}
              >
                <strong>{item.title}</strong>
              </Link>
            </li>
          ))
        )}
      </ul>
    ) : (
      // ✅ DESKTOP version
      subMenuItems.map((section) => (
        <SubMenuSection
          key={section.heading}
          role="group"
          aria-label={section.heading}
        >
          <h3
            style={{
              color: "white", // 🔥 Heading black
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            {section.heading}
          </h3>

          <ul
            style={{
              listStyle: "none", // 🔥 mimic mobile style
              paddingLeft: "1.25rem",
              margin: 0,
              color: "white", // 🔥 Force black text
            }}
          >
            {section.items.map((item) => (
              <li
                key={item.title}
                style={{
                  marginBottom: "0.5rem",
                  color: "white", // 🔥 li text black
                }}
              >
                <Link
                  to={item.path}
                  onClick={onItemClick}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <SubMenuItem
                    tabIndex={0}
                    role="menuitem"
                    onKeyDown={(e) => e.key === "Enter" && onItemClick()}
                    style={{ color: "white" }} // 🔥 SubMenu item text black
                  >
                    <strong style={{color: "white"}}>{item.title}</strong>
                    <p style={{ margin: 0, color: "gray" }}>{item.description}</p>
                  </SubMenuItem>
                </Link>
              </li>
            ))}
          </ul>
        </SubMenuSection>
      ))
    )}
  </>
);


// Navbar component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubMenuOpenDesktop, setIsSubMenuOpenDesktop] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Set login state on mount
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isSubMenuOpen) setIsSubMenuOpen(false); // Close submenu when main menu toggles
  };

  const toggleSubMenu = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsSubMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
    setIsSubMenuOpenDesktop(false);
  };

  const Item = {
    Navitem1: "Personals",
    Navitem2: "Market",
    Navitem3: "Company",
        Navitem4: "Payments",

  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <NavbarWrapper scrolled={scrolled} role="banner">
      <NavContainer>
        <Logo />

        <NavLinksDesktop>
          <NavLinkWithSubmenu
            to="/card"
            as={Link}
            onMouseEnter={() => setIsSubMenuOpenDesktop(true)}
            onMouseLeave={() => setIsSubMenuOpenDesktop(false)}
            isSubMenuOpen={isSubMenuOpenDesktop}
            aria-expanded={isSubMenuOpenDesktop}
            aria-haspopup="true"
          >
            {Item.Navitem1}
            <SubMenuWrapper isOpen={isSubMenuOpenDesktop}>
              <SubMenu onItemClick={handleLinkClick} isMobile={false} />
            </SubMenuWrapper>
          </NavLinkWithSubmenu>

          <NavLink as={Link} to="/market">
            {Item.Navitem2}
          </NavLink>
                              <NavLink as={Link} to="/payment">
            {Item.Navitem4}
          </NavLink>
          <NavLink as={Link} to="/company">
            {Item.Navitem3}
          </NavLink>

        </NavLinksDesktop>

        <ActionsDesktop>
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <StyledNavLink as={Link} to="/login" onClick={handleLinkClick}>
                Login
              </StyledNavLink>
              <Button
                as={Link}
                to="/SignUp"
                onClick={handleLinkClick}
                fullWidth
              >
                Sign Up
              </Button>
            </>
          )}
        </ActionsDesktop>

        <MenuToggle
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          scrolled={scrolled}
        >
          {isMenuOpen ? "✕" : "☰"}
        </MenuToggle>
      </NavContainer>
      <MobileMenu isOpen={isMenuOpen} aria-label="Mobile navigation">
        <NavLinkWithSubmenu
          as={Link}
          to="/personals"
          onClick={toggleSubMenu}
          isSubMenuOpen={isSubMenuOpen}
          aria-expanded={isSubMenuOpen}
          aria-haspopup="true"
        >
          {Item.Navitem1}
          <SubMenuWrapper isOpen={isSubMenuOpen}>
            <SubMenu onItemClick={handleLinkClick} isMobile={true} />
          </SubMenuWrapper>
        </NavLinkWithSubmenu>
        <NavLink as={Link} to="/market" onClick={handleLinkClick}>
          {Item.Navitem2}
        </NavLink>
                <NavLink as={Link} to="/payment" onClick={handleLinkClick}>
          {Item.Navitem4}
        </NavLink>
        <NavLink
          // to="/company"
          as={Link}
          to={"/company"}
          onClick={handleLinkClick}
          className="text-lg md:text-xl font-semibold text-indigo-700 hover:text-indigo-900 px-5 py-2 transition duration-300 ease-in-out"
        >
          {Item.Navitem3}
        </NavLink>

        <ActionsWrapper>
          <StyledNavLink as={Link} to="/login" onClick={handleLinkClick}>
            Login
          </StyledNavLink>

          <Button as={Link} to="/signup" onClick={handleLinkClick} fullWidth>
            Sign Up
          </Button>
        </ActionsWrapper>
      </MobileMenu>
    </NavbarWrapper>
  );
};

// Other styled components
const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.background : "transparent"};
  box-shadow: ${({ theme, scrolled }) =>
    scrolled ? theme.shadows.small : "none"};
  padding: ${({ theme, scrolled }) =>
      scrolled ? theme.spacing.xs : theme.spacing.sm}
    0;
  z-index: 1000;
  transition: background-color ${({ theme }) => theme.transitions.medium},
    box-shadow ${({ theme }) => theme.transitions.medium},
    padding ${({ theme }) => theme.transitions.medium};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

const NavLinksDesktop = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ActionsDesktop = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 2px;
  animation: ${({ isOpen }) => (isOpen ? "slideDown 0.3s ease" : "none")};
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} 0;
    margin-top: ${({ theme }) => theme.spacing.sm};
    align-items: flex-start; /* Left-align actions */
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const MenuToggle = styled.button`
  background: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.background : "rgba(255, 255, 255, 0.1)"};
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.text : theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${({ theme }) => theme.transitions.fast},
              color ${({ theme }) => theme.transitions.fast},
              transform 0.2s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    margin-left: auto;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

// Submenu items data
const subMenuItems = [
  {
    heading: "Grow your savings",
    items: [
      {
        path: "/flexible-saving",
        title: "Flexible Saving",
        description: "Earn interest with daily payouts and no lock-ups",
      },
      {
        path: "/flexible-terms",
        title: "Fixed-term Savings",
        description: "Earn more interest for longer periods of up to 12 months.",
      },
      {
        path: "/dual-invest",
        title: "Dual Investment",
        description: "Earn high yield while buying low and selling high",
      },
    ],
  },
  {
    heading: "Manage your assets",
    items: [
      {
        path: "/exchange",
        title: "Exchange",
        description: "Swap over 100 digital assets with just a tap.",
      },
    ],
  },
  {
    heading: "Spend anywhere",
    items: [
      {
        path: "/card",
        title: "Ai Key Card",
        description: "Spend while earning interest and receiving cashback.",
      },
    ],
  },
];


export default Navbar;

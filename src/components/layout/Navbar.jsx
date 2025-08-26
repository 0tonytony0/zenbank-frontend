import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Modern Dark Blue Theme Colors
const theme = {
  colors: {
    primary: "#1e3a8a", // Dark blue
    primaryLight: "#3b82f6", // Lighter blue
    secondary: "#1e293b", // Dark slate
    accent: "#f59e0b", // Amber accent
    accentLight: "#fef3c7", // Light amber
    background: "#0f172a", // Very dark blue
    surface: "#1e293b", // Card background
    text: "#f8fafc", // Light text
    textSecondary: "#cbd5e1", // Secondary text
    textMuted: "#94a3b8", // Muted text
    border: "#334155", // Border color
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    white: "#ffffff",
  },
  shadows: {
    small: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    glow: "0 0 20px rgba(59, 130, 246, 0.15)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  transitions: {
    fast: "0.15s ease-out",
    medium: "0.3s ease-out",
  },
};

// NavLink with modern styling
const NavLink = styled.a`
  margin: 0 ${theme.spacing.md};
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 8px;
  transition: all ${theme.transitions.fast};

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
    background-color: rgba(245, 158, 11, 0.1);
    outline: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: ${theme.spacing.xs} 0;
    font-size: 1rem;
    width: 100%;
    text-align: left;
    padding: ${theme.spacing.md};
    border-radius: 6px;
  }
`;

// SubMenuWrapper with improved glass morphism effect
const SubMenuWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(15, 23, 42, 0.95) 50%,
    rgba(30, 58, 138, 0.9) 100%
  );
  backdrop-filter: blur(16px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xl};
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-10px")});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 800px;
  max-width: 900px;
  box-shadow: ${theme.shadows.xl}, ${theme.shadows.glow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%, 
      rgba(245, 158, 11, 0.03) 100%
    );
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    min-width: 600px;
    max-width: 700px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    margin: ${theme.spacing.md} 0;
    padding: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, 
      rgba(30, 41, 59, 0.95) 0%, 
      rgba(15, 23, 42, 0.95) 100%
    );
    backdrop-filter: blur(8px);
    border: 1px solid rgba(51, 65, 85, 0.5);
    transform: none;
    opacity: 1;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    box-shadow: ${theme.shadows.large};
    overflow: hidden;
    
    animation: ${({ isOpen }) => (isOpen ? "mobileSlideDown 0.3s ease-out" : "none")};

    @keyframes mobileSlideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
      }
      to {
        opacity: 1;
        transform: translateY(0);
        max-height: 500px;
      }
    }
  }
`;

// NavLinkWithSubmenu
const NavLinkWithSubmenu = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: "▼";
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    ${({ isSubMenuOpen }) => isSubMenuOpen && `transform: rotate(180deg);`}
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: space-between;
    width: 100%;
  }
`;

// SubMenuSection with improved layout
const SubMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  position: relative;

  h3 {
    color: ${theme.colors.accent};
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 ${theme.spacing.lg} 0;
    padding-bottom: ${theme.spacing.sm};
    border-bottom: 2px solid rgba(245, 158, 11, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, ${theme.colors.accent} 0%, transparent 100%);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: ${theme.spacing.lg};

    h3 {
      font-size: 1rem;
    }
  }
`;

// SubMenuItem with improved card design and proper text handling
const SubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};
  border-radius: 16px;
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.03) 0%, 
    rgba(59, 130, 246, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: visible;
  width: 100%;
  height: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%, 
      rgba(245, 158, 11, 0.02) 100%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.medium};
  }

  &:hover,
  &:focus {
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.1) 0%, 
      rgba(245, 158, 11, 0.05) 100%
    );
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.large}, 0 8px 25px rgba(59, 130, 246, 0.1);
    outline: none;

    &::before {
      opacity: 1;
    }

    .title {
      color: ${theme.colors.accent};
    }
  }

  .title {
    font-size: 1rem;
    color: ${theme.colors.text};
    font-weight: 700;
    margin-bottom: ${theme.spacing.sm};
    line-height: 1.4;
    position: relative;
    z-index: 1;
    transition: color ${theme.transitions.fast};
  }

  .description {
    font-size: 0.875rem;
    color: ${theme.colors.textMuted};
    line-height: 1.6;
    margin: 0;
    position: relative;
    z-index: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    flex-grow: 1;
    /* Remove line clamping for desktop to show full text */
  }
`;

// Mobile SubMenu Item Component
const MobileSubMenuItem = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.05) 0%, 
    rgba(59, 130, 246, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.1) 0%, 
      rgba(245, 158, 11, 0.05) 100%
    );
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateX(4px);
  }

  .mobile-title {
    color: ${theme.colors.text};
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: ${theme.spacing.xs};
    line-height: 1.3;
  }

  .mobile-description {
    color: ${theme.colors.textMuted};
    font-size: 0.8rem;
    line-height: 1.4;
    margin: 0;
  }
`;

// Mobile SubMenu Section Component
const MobileSubMenuSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
      width: 75%;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    color: ${theme.colors.accent};
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 ${theme.spacing.md} 0;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: rgba(245, 158, 11, 0.1);
    border-left: 3px solid ${theme.colors.accent};
    border-radius: 0 6px 6px 0;
  }
`;

// SubMenu Component
const SubMenu = ({ onItemClick, isMobile }) => (
  <>
    {isMobile ? (
      <div style={{ padding: `${theme.spacing.md} ${theme.spacing.md} 0` }}>
        {subMenuItems.map((section) => (
          <MobileSubMenuSection key={section.heading}>
            {/* <h4>{section.heading}</h4> */}
            {section.items.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={onItemClick}
                style={{ textDecoration: "none", display: "block" }}
              >
                <MobileSubMenuItem>
                  <div className="mobile-title">{item.title}</div>
                </MobileSubMenuItem>
              </Link>
            ))}
          </MobileSubMenuSection>
        ))}
      </div>
    ) : (
      subMenuItems.map((section) => (
        <SubMenuSection key={section.heading}>
          <h3>{section.heading}</h3>
          {section.items.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={onItemClick}
              style={{ textDecoration: "none" }}
            >
              <SubMenuItem tabIndex={0}>
                <div className="title">{item.title}</div>
                <p className="description">{item.description}</p>
              </SubMenuItem>
            </Link>
          ))}
        </SubMenuSection>
      ))
    )}
  </>
);

// Main Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubMenuOpenDesktop, setIsSubMenuOpenDesktop] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check login state
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isSubMenuOpen) setIsSubMenuOpen(false);
  };

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
    setIsSubMenuOpenDesktop(false);
  };

  const menuItems = {
    personals: "Personals",
    market: "Market",
    company: "Company",
    payments: "Payments",
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
            as={Link}
            to="/personals"
            onMouseEnter={() => setIsSubMenuOpenDesktop(true)}
            onMouseLeave={() => setIsSubMenuOpenDesktop(false)}
            isSubMenuOpen={isSubMenuOpenDesktop}
            aria-expanded={isSubMenuOpenDesktop}
            aria-haspopup="true"
          >
            {menuItems.personals}
            <SubMenuWrapper isOpen={isSubMenuOpenDesktop}>
              <SubMenu onItemClick={handleLinkClick} isMobile={false} />
            </SubMenuWrapper>
          </NavLinkWithSubmenu>

          <NavLink as={Link} to="/market">
            {menuItems.market}
          </NavLink>
          
          <NavLink as={Link} to="/payment">
            {menuItems.payments}
          </NavLink>
          
          <NavLink as={Link} to="/company">
            {menuItems.company}
          </NavLink>
        </NavLinksDesktop>

        <ActionsDesktop>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          ) : (
            <>
              <LoginLink as={Link} to="/login" onClick={handleLinkClick}>
                Login
              </LoginLink>
              <SignUpButton as={Link} to="/signup" onClick={handleLinkClick}>
                Sign Up
              </SignUpButton>
            </>
          )}
        </ActionsDesktop>

        <MenuToggle
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          scrolled={scrolled}
        >
          <span className={isMenuOpen ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </span>
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
          {menuItems.personals}
          <SubMenuWrapper isOpen={isSubMenuOpen}>
            <SubMenu onItemClick={handleLinkClick} isMobile={true} />
          </SubMenuWrapper>
        </NavLinkWithSubmenu>
        
        <NavLink as={Link} to="/market" onClick={handleLinkClick}>
          {menuItems.market}
        </NavLink>
        
        <NavLink as={Link} to="/payment" onClick={handleLinkClick}>
          {menuItems.payments}
        </NavLink>
        
        <NavLink as={Link} to="/company" onClick={handleLinkClick}>
          {menuItems.company}
        </NavLink>

        <MobileActions>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          ) : (
            <>
              <LoginLink as={Link} to="/login" onClick={handleLinkClick}>
                Login
              </LoginLink>
              <SignUpButton as={Link} to="/signup" onClick={handleLinkClick}>
                Sign Up
              </SignUpButton>
            </>
          )}
        </MobileActions>
      </MobileMenu>
    </NavbarWrapper>
  );
};

// Styled Components (keeping the same as original for navbar structure)
const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ scrolled }) =>
    scrolled 
      ? `linear-gradient(135deg, ${theme.colors.background}f0 0%, ${theme.colors.primary}e6 100%)`
      : 'rgba(15, 23, 42, 0.8)'
  };
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ scrolled }) => 
    scrolled ? theme.colors.border : 'rgba(51, 65, 85, 0.3)'
  };
  padding: ${({ scrolled }) => scrolled ? theme.spacing.sm : theme.spacing.md} 0;
  z-index: 1000;
  transition: all ${theme.transitions.medium};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const NavLinksDesktop = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ActionsDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.secondary} 100%);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border};
  animation: ${({ isOpen }) => (isOpen ? "slideDown 0.3s ease" : "none")};

  @media (min-width: ${theme.breakpoints.tablet}) {
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

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
`;

const LoginLink = styled.a`
  color: ${theme.colors.textSecondary};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  transition: all ${theme.transitions.fast};

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
    background-color: rgba(245, 158, 11, 0.1);
    outline: none;
  }
`;

const SignUpButton = styled.a`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.warning} 100%);
  color: ${theme.colors.background};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.medium};

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
    outline: none;
  }
`;

const LogoutButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.error} 0%, #dc2626 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.medium};

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
    outline: none;
  }
`;

const MenuToggle = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all ${theme.transitions.fast};

  &:hover,
  &:focus {
    background: rgba(245, 158, 11, 0.1);
    border-color: ${theme.colors.accent};
    outline: none;
  }

  span {
    display: block;
    position: relative;
    width: 20px;
    height: 16px;

    span {
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.text};
      border-radius: 1px;
      transition: all 0.3s ease;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 7px;
      }
      &:nth-child(3) {
        top: 14px;
      }
    }

    &.open {
      span:nth-child(1) {
        top: 7px;
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        top: 7px;
        transform: rotate(-45deg);
      }
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
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
        title: "SyZyKy Card",
        description: "Spend while earning interest and receiving cashback.",
      },
    ],
  },
];

export default Navbar;
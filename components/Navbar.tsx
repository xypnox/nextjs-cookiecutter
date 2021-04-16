import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { shortname } from "../constants";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem 1rem;
  border-bottom: 2px solid #e0e0e0;
`;

const A = styled.a`
  margin: 0 0.5rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #553ddb;
  }
`;

const Logo = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

const navbar_links = [
  {
    name: "About",
    url: "#",
  },
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Pricing",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
];

export default function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <Link href="/">
          <Logo>{shortname}</Logo>
        </Link>
      </div>
      <div className="links">
        {navbar_links.map((l, index) => (
          <Link href={l.url} key={`link_${l.name}_${index}`}>
            <A>{l.name}</A>
          </Link>
        ))}
      </div>
    </Nav>
  );
}

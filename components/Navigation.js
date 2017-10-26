import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import ActiveLink from "../components/Link";

const StyledMenu = styled.div`
  .headroom {
    background: white;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      max-width: 850px;
      margin: 0 auto;
      padding: 15px 25px;
    }

    a {
      text-decoration: none;
      margin-left: 1rem;
      transition: all 0.6s;
      &:first-child {
        margin-left: 0;
      }

      &.active {
        text-decoration: underline wavy;
      }

      &.hidden {
        opacity: 0;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <StyledMenu>
      <Headroom>
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about-me">About Me</ActiveLink>
        </nav>
      </Headroom>
    </StyledMenu>
  );
};

export default Navigation;

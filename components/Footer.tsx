import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 0rem 0.5rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        With ❤️ by <a href="https://www.xypnox.com">xypnox</a>
      </p>
    </FooterWrapper>
  );
}

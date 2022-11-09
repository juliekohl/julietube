import React from 'react';
import styled from 'styled-components';

export default function Footer () {
    return (
        <StyledFooter>
            <p className="footer">
                Made with 💖 by <strong><a href="https://github.com/juliekohl">Julie Kohl</a></strong><small> © 2022 </small>
            </p>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  .footer {
    text-align: center;
    margin: 50px 0 50px 0;
  }
  .footer p a {
    color: red;
  }
`;

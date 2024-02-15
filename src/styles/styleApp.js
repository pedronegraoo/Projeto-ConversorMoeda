import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const WrapperGlobal = styled.section`
  width: 100vw;
  height: 100vh;

  padding: 2rem 4%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  h1 {
    font-size: 2.3rem;
    font-family: var(--font-ptSans);
    letter-spacing: 1.5px;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.border.color};

    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.7rem;
    font-family: var(--font-ptSans);
    margin-top: 2rem;
  }

  @media ${breakpoints.bg} {
    h1 {
      margin-top: 4rem;
    }
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 2.1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media ${breakpoints.sm} {
    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  @media ${breakpoints.extrasm} {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.3rem;
      margin-top: 1.5rem;
    }
  }
`;

export const BntToggleTheme = styled.div`
  position: absolute;
  top: 25px;
  right: 35px;

  @media ${breakpoints.extramd} {
    top: 25px;
    right: 15px;
  }

  @media ${breakpoints.sm} {
  }
`;

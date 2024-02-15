import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperBtn = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .iconBtn {
    display: none;
  }

  @media ${breakpoints.bg} {
    width: 8rem;
  }

  @media ${breakpoints.md} {
    width: 3.5rem;

    .btnOG {
      display: none;
    }

    .iconBtn {
      width: 100%;
      display: block;
      font-size: 1.3rem;
    }
  }

  @media ${breakpoints.extramd} {
    width: 100%;
  }

  @media ${breakpoints.sm} {
    .iconBtn {
      font-size: 1.1rem;
    }
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 2.5rem;

  font-family: var(--font-ptSans);
  font-size: 1rem;
  text-transform: uppercase;

  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.text};

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.button.backgroundHover};
    color: ${(props) => props.theme.button.textHover};
    border: 1px solid ${(props) => props.theme.button.borderHover};
  }
`;

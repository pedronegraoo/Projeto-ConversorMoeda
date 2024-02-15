import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Form = styled.form`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;

  @media ${breakpoints.extramd} {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperLabelSelect = styled.div`
  width: 20.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 1.5rem;
    font-family: var(--font-ptSans);
    letter-spacing: 0.5px;
    text-transform: capitalize;
  }

  select {
    /* appearance: none; */
    /* -webkit-appearance: none;
    -moz-appearance: none; */

    width: 100%;
    height: 2.5rem;
    padding: 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;

    font-size: 1.1rem;
    font-family: var(--font-Barlow);

    background-color: ${(props) => props.theme.select.background};
    color: ${(props) => props.theme.select.text};

    option {
      font-size: 1.1rem;
      font-family: var(--font-Barlow);
    }
  }

  @media ${breakpoints.bg} {
    width: 18rem;
  }

  @media ${breakpoints.md} {
    label {
      font-size: 1.2rem;
    }

    select {
      font-size: 0.9rem;
      option {
        font-size: 0.9rem;
      }
    }
  }

  @media ${breakpoints.extramd} {
    width: 100%;
  }

  @media ${breakpoints.extrasm} {
    label {
      font-size: 1.1rem;
    }

    select {
      font-size: 0.8rem;
      option {
        font-size: 0.8rem;
      }
    }
  }
`;

export const WrapperSelectInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  #inputBase {
    width: 4rem;
    height: 2.5rem;
    font-family: var(--font-Barlow);
    padding: 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;

    background-color: ${(props) => props.theme.input.background};
    color: ${(props) => props.theme.input.text};
  }

  @media ${breakpoints.extramd} {
    width: 100%;
  }
`;

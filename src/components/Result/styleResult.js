import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const ResultGlobal = styled.div`
  display: flex;
  gap: 5rem;

  margin-top: 3rem;

  @media ${breakpoints.extramd} {
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export const WrapperResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.7rem;
  font-family: var(--font-Barlow);

  @media ${breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${breakpoints.sm} {
    font-size: 1.3rem;
  }

  @media ${breakpoints.extrasm} {
    font-size: 1.2rem;
  }
`;

export const WrapperTargetResult = styled.div`
  display: flex;
  gap: 0.5rem;
`;

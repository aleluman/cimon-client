import styled from "@emotion/styled";

export const TooltipContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primaryAccent};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.primaryAccent};
  box-shadow: 0 0 22px ${({ theme }) => theme.color.shadow};
  font-size: 0.75rem;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  transition: opacity 0.3s;
  z-index: 9999;

  &[data-popper-interactive="false"] {
    pointer-events: none;
  }

  &[data-popper-placement*="bottom"] div {
    left: 0;
    margin-top: -0.4rem;
    top: 0;
  }

  &[data-popper-placement*="bottom"] div::before {
    border-color: transparent transparent ${({ theme }) => theme.color.primaryAccent} transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-popper-placement*="bottom"] div::after {
    border-color: transparent transparent ${({ theme }) => theme.color.primaryAccent} transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }

  &[data-popper-placement*="top"] div {
    bottom: 0;
    left: 0;
    margin-bottom: -1.08rem;
  }

  &[data-popper-placement*="top"] div::before {
    border-color: transparent transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-popper-placement*="top"] div::after {
    border-color: ${({ theme }) => theme.color.primaryAccent} transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }

  &[data-popper-placement*="right"] div {
    left: 0;
    margin-left: -0.7rem;
  }

  &[data-popper-placement*="right"] div::before {
    border-color: transparent ${({ theme }) => theme.color.primaryAccent} transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-popper-placement*="right"] div::after {
    border-color: transparent transparent transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0px;
  }

  &[data-popper-placement*="left"] div {
    margin-right: -0.7rem;
    right: 0;
  }

  &[data-popper-placement*="left"] div::before {
    border-color: transparent transparent transparent ${({ theme }) => theme.color.primaryAccent};
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-popper-placement*="left"] div::after {
    border-color: transparent transparent transparent ${({ theme }) => theme.color.primaryAccent};
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 3px;
    top: 0;
  }
`;

export const Arrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;
  pointer-events: none;

  &::before {
    border-style: solid;
    content: "";
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: "";
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }
`;
